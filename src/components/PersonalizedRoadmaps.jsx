import { Code2, Database, Brain, Cloud, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { quizQuestions, saveQuizResults, checkQuizCompletion } from '../firebase/userQuiz';
import { Loader2 } from "lucide-react";

const RoadmapCategory = ({ icon: Icon, title, roles, locked }) => (
  <div className={`bg-gray-800 rounded-lg p-6 border-2 border-transparent transition-all duration-300 ${
    locked ? 'opacity-75' : 'hover:border-cyan-500'
  }`}>
    <div className="flex items-center gap-4 mb-4">
      <Icon className={`w-8 h-8 ${locked ? 'text-gray-500' : 'text-cyan-500'}`} />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {locked && <Lock className="w-5 h-5 text-gray-500 ml-auto" />}
    </div>
    <div className="space-y-3">
      {roles.map((role) => (
        <div
          key={role}
          className={`block p-3 rounded-md ${
            locked 
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition-colors'
          }`}
        >
          {role}
          {locked && <span className="text-sm ml-2">(Coming Soon)</span>}
        </div>
      ))}
    </div>
  </div>
);

const QuizQuestion = ({ question, onAnswer, userAnswers }) => (
  <div className="bg-gray-800 rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold text-white mb-4">{question.question}</h3>
    <div className="space-y-3">
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => onAnswer(question.id, option)}
          className={`w-full text-left p-4 rounded-lg transition-all ${
            userAnswers[question.id]?.includes(option)
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

const QuizComponent = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const handleAnswer = (questionId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: [answer]
    }));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await saveQuizResults(user.uid, userAnswers);
      onComplete(userAnswers);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
    setIsSubmitting(false);
  };

  const canSubmit = Object.keys(userAnswers).length === quizQuestions.length;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-cyan-400">
            {Math.round((Object.keys(userAnswers).length / quizQuestions.length) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-cyan-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion + 1) / quizQuestions.length * 100}%` }}
          />
        </div>
      </div>

      <QuizQuestion
        question={quizQuestions[currentQuestion]}
        onAnswer={handleAnswer}
        userAnswers={userAnswers}
      />

      <div className="flex justify-between mt-6">
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Previous Question
          </button>
        )}
        
        {currentQuestion < quizQuestions.length - 1 && (
          <button
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            className="ml-auto text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Next Question
          </button>
        )}

        {currentQuestion === quizQuestions.length - 1 && (
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || isSubmitting}
            className={`ml-auto inline-flex items-center gap-2 px-6 py-2 rounded-lg ${
              canSubmit && !isSubmitting
                ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Complete Quiz
          </button>
        )}
      </div>
    </div>
  );
};

const DashboardContent = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {categories.map((category) => (
      <RoadmapCategory
        key={category.title}
        icon={category.icon}
        title={category.title}
        roles={category.roles}
        locked={category.locked}
      />
    ))}
  </div>
);

const PersonalizedRoadmaps = () => {
  const { user } = useAuth();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserQuizStatus = async () => {
      if (user) {
        const hasCompletedQuiz = await checkQuizCompletion(user.uid);
        setQuizCompleted(hasCompletedQuiz);
        setLoading(false);
      }
    };

    checkUserQuizStatus();
  }, [user]);

  const handleQuizComplete = async (results) => {
    setQuizCompleted(true);
    // Here you would typically process the results and update the roadmap recommendations
    console.log('Quiz results:', results);
  };

  const categories = [
    {
      icon: Code2,
      title: "AI-Recommended Paths",
      roles: [
        "Recommended Path 1",
        "Recommended Path 2",
        "Custom Learning Track",
      ],
      locked: !user,
    },
    {
      icon: Database,
      title: "Your Progress",
      roles: [
        "Current Learning Path",
        "Completed Modules",
        "Skill Assessment",
      ],
      locked: !user,
    },
    {
      icon: Brain,
      title: "Personalized Resources",
      roles: [
        "Custom Learning Materials",
        "Practice Projects",
        "Mentor Matching",
      ],
      locked: !user,
    },
    {
      icon: Cloud,
      title: "Learning Analytics",
      roles: [
        "Progress Tracking",
        "Skill Gap Analysis",
        "Performance Metrics",
      ],
      locked: !user,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  if (!quizCompleted && user) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 pt-20 pb-12">
          <QuizComponent onComplete={handleQuizComplete} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Personalized Learning Journey
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {user 
              ? "Welcome to your personalized learning dashboard."
              : "Sign in to unlock your personalized learning journey with AI-powered recommendations and progress tracking."}
          </p>
        </div>

        <DashboardContent categories={categories} />
      </div>
    </div>
  );
};

export default PersonalizedRoadmaps; 