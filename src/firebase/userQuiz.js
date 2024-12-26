import { db } from '../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const quizQuestions = [
  {
    id: 1,
    question: "Which field are you most interested in pursuing?",
    options: [
      "Software Development",
      "Data Science",
      "Machine Learning/AI",
      "Web Development"
    ]
  },
  {
    id: 2,
    question: "How do you prefer to learn?",
    options: [
      "Reading articles and documentation",
      "Watching video tutorials",
      "Practicing with hands-on projects (upcoming)",
      "All of the above"
    ]
  },
  {
    id: 3,
    question: "How would you describe your current skill level?",
    options: [
      "Beginner (I'm just getting started)",
      "Intermediate (I know the basics)",
      "Advanced (I'm comfortable with complex topics)"
    ]
  },
  {
    id: 4,
    question: "How much time can you dedicate to learning each week?",
    options: [
      "5-10 hours",
      "10-20 hours",
      "More than 20 hours"
    ]
  },
  {
    id: 5,
    question: "How long do you have to prepare for your desired role or goal?",
    options: [
      "Less than 3 months",
      "3-6 months",
      "6-12 months",
      "More than 1 year"
    ]
  },
  {
    id: 6,
    question: "Which areas would you like to focus on the most?",
    options: [
      "Algorithms and Data Structures",
      "System Design",
      "Domain-Specific Knowledge (e.g., Data Science, AI)",
      "Soft Skills and Interview Preparation"
    ]
  },
  {
    id: 7,
    question: "Are you interested in building projects to solidify your learning?",
    options: [
      "Yes, I'd love to work on practical projects!",
      "No, I prefer traditional learning."
    ]
  }
];

export const saveQuizResults = async (userId, answers) => {
  try {
    const quizSubmission = {
      userId: userId,
      responses: Object.entries(answers).reduce((acc, [questionId, selectedOptions]) => ({
        ...acc,
        [questionId]: selectedOptions
      }), {}),
      submittedAt: new Date().toISOString()
    };

    await setDoc(doc(db, 'userQuizResults', userId), quizSubmission);
    return true;
  } catch (error) {
    console.error('Error saving quiz results:', error);
    return false;
  }
};

export const checkQuizCompletion = async (userId) => {
  try {
    const docRef = doc(db, 'userQuizResults', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (error) {
    console.error('Error checking quiz completion:', error);
    return false;
  }
};

export { quizQuestions }; 