import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const PatternQuestions = {
  title: 'Pattern Questions',
  description: 'Master pattern-based problem solving to improve your nested loops and control flow understanding',
  
  conceptOverview: {
    introduction: 'Pattern questions are fundamental programming exercises that help strengthen your understanding of nested loops, control flow, and problem-solving logic. These questions are often asked in interviews to assess a programmer\'s basic coding skills.',
    keyTakeaways: [
      'Understanding nested loop structures',
      'Space and character pattern manipulation',
      'Logic building through visualization',
      'Control flow implementation',
      'Code organization skills'
    ]
  },

  roadmapFit: {
    description: 'Pattern questions build upon C++ basics and prepare you for more complex programming challenges:',
    connections: [
      'Builds upon basic control flow concepts',
      'Strengthens problem-solving approach',
      'Prepares for complex nested iterations',
      'Foundation for matrix problems',
      'Improves code organization skills'
    ]
  },

  sections: [
    {
      title: 'Pattern Categories',
      items: [
        'Rectangle Patterns (1-2)',
        'Triangle Patterns (3-7)',
        'Number Patterns (8-13)',
        'Star Patterns (14-19)',
        'Advanced Patterns (20-22)'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Pattern Examples',
    examples: [
      {
        title: 'Rectangle Pattern',
        code:
`// Pattern 1: Solid Rectangle
for(int i = 0; i < n; i++) {
    for(int j = 0; j < m; j++) {
        cout << "* ";
    }
    cout << endl;
}

// Pattern 2: Hollow Rectangle
for(int i = 0; i < n; i++) {
    for(int j = 0; j < m; j++) {
        if(i == 0 || i == n-1 || j == 0 || j == m-1)
            cout << "* ";
        else
            cout << "  ";
    }
    cout << endl;
}`
      },
      {
        title: 'Triangle Patterns',
        code:
`// Pattern 3: Half Pyramid
for(int i = 0; i < n; i++) {
    for(int j = 0; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}

// Pattern 4: Inverted Half Pyramid
for(int i = n; i > 0; i--) {
    for(int j = 0; j < i; j++) {
        cout << "* ";
    }
    cout << endl;
}`
      },
      {
        title: 'Number Pattern',
        code:
`// Pattern 12: Number Pattern
for(int i = 1; i <= n; i++) {
    // Print numbers from 1 to i
    for(int j = 1; j <= i; j++) {
        cout << j << " ";
    }
    cout << endl;
}

// Pattern 13: Floyd's Triangle
int number = 1;
for(int i = 1; i <= n; i++) {
    for(int j = 1; j <= i; j++) {
        cout << number << " ";
        number++;
    }
    cout << endl;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect Loop Bounds',
        solution: 'Always verify your loop conditions and bounds. Off-by-one errors are common in pattern problems.'
      },
      {
        issue: 'Space Management',
        solution: 'Pay attention to spaces between characters. Inconsistent spacing can distort the pattern.'
      },
      {
        issue: 'Line Endings',
        solution: 'Remember to add proper line endings (endl or \\n) after each row of the pattern.'
      },
      {
        issue: 'Pattern Alignment',
        solution: 'For patterns requiring alignment (like pyramids), calculate spaces correctly.'
      },
      {
        issue: 'Variable Initialization',
        solution: 'For number patterns, ensure proper initialization and increment of counter variables.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'How do you approach solving a new pattern question?',
        a: 'First draw the pattern for n=3,4,5 to observe the pattern. Then identify rows and columns relationship, and finally implement using nested loops.'
      },
      {
        q: 'What is the importance of nested loops in pattern printing?',
        a: 'Nested loops help control both row and column iterations. Outer loop manages rows while inner loop handles elements within each row.'
      },
      {
        q: 'How do you handle spaces in pyramid patterns?',
        a: 'Calculate spaces based on row number. For each row, first print required spaces, then print the pattern characters.'
      },
      {
        q: 'Explain the logic behind Floyd\'s Triangle.',
        a: 'Use a counter variable that increments with each position. Outer loop controls rows, inner loop prints current counter value and increments it.'
      },
      {
        q: 'How do you optimize pattern printing code?',
        a: 'Minimize unnecessary iterations, use appropriate loop bounds, and avoid redundant calculations. Sometimes using formulas instead of loops can optimize specific patterns.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Pattern Questions Tutorial',
      url: 'https://youtu.be/EAR7De6Goz4?si=C_fHwYHmg8mT_l9-',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Patterns',
      url: 'https://practice.geeksforgeeks.org/topics/pattern-printing/',
      icon: Code2
    },
    {
      type: 'tutorial',
      title: 'Pattern Guide',
      url: 'https://www.geeksforgeeks.org/cpp-program-to-print-pyramid-patterns/',
      icon: BookOpen
    }
  ]
};

export default PatternQuestions; 