import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicRecursion = {
  title: 'Basic Recursion',
  description: 'Master fundamental recursive problem-solving techniques in C++',
  
  conceptOverview: {
    introduction: 'Recursion is a programming concept where a function calls itself to solve a problem by breaking it down into smaller subproblems. Understanding recursion is crucial for solving complex algorithmic problems and implementing elegant solutions.',
    keyTakeaways: [
      'Understanding recursive function calls',
      'Base case and recursive case',
      'Call stack and memory usage',
      'Problem-solving using recursion',
      'Recursive vs Iterative solutions'
    ]
  },

  roadmapFit: {
    description: 'Basic Recursion builds upon functions and prepares you for advanced algorithmic concepts:',
    connections: [
      'Functions - Foundation for recursive implementations',
      'Data Structures - Tree and graph traversals',
      'Dynamic Programming - Optimizing recursive solutions',
      'Backtracking - Complex recursive problem solving',
      'Divide and Conquer - Recursive problem breakdown'
    ]
  },

  sections: [
    {
      title: 'Core Recursion Concepts',
      items: [
        'Base Case and Recursive Case',
        'Call Stack Understanding',
        'Factorial and Fibonacci',
        'Array Problems using Recursion',
        'String Problems using Recursion',
        'Multiple Recursion Calls'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Recursion Examples',
    examples: [
      {
        title: 'Factorial Calculation',
        code:
`// Recursive function to calculate factorial
int factorial(int n) {
    // Base case
    if (n == 0 || n == 1)
        return 1;
        
    // Recursive case
    return n * factorial(n - 1);
}`
      },
      {
        title: 'Fibonacci Series',
        code:
`// Recursive function for fibonacci
int fibonacci(int n) {
    // Base cases
    if (n <= 1)
        return n;
        
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}`
      },
      {
        title: 'Array Sum',
        code:
`// Calculate sum of array using recursion
int arraySum(int arr[], int n) {
    // Base case
    if (n <= 0)
        return 0;
        
    // Recursive case
    return arr[n-1] + arraySum(arr, n-1);
}`
      },
      {
        title: 'String Palindrome',
        code:
`// Check if string is palindrome using recursion
bool isPalindrome(string str, int start, int end) {
    // Base cases
    if (start >= end)
        return true;
        
    // If characters don't match
    if (str[start] != str[end])
        return false;
        
    // Recursive case
    return isPalindrome(str, start + 1, end - 1);
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Missing Base Case',
        solution: 'Always define proper base cases to prevent infinite recursion.'
      },
      {
        issue: 'Stack Overflow',
        solution: 'Be mindful of recursion depth and stack memory limitations.'
      },
      {
        issue: 'Redundant Calculations',
        solution: 'Use memoization or dynamic programming for overlapping subproblems.'
      },
      {
        issue: 'Incorrect Base Case',
        solution: 'Ensure base cases handle all possible terminating scenarios.'
      },
      {
        issue: 'Complex Recursive Logic',
        solution: 'Keep recursive logic simple and clear, break down complex problems into smaller steps.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is recursion and how does it work?',
        a: 'Recursion is when a function calls itself. It works by breaking down a problem into smaller subproblems until reaching a base case that can be solved directly.'
      },
      {
        q: 'What are base cases and why are they important?',
        a: 'Base cases are conditions that stop recursion. They are crucial to prevent infinite recursion and define when the recursive process should terminate.'
      },
      {
        q: 'How does recursive call stack work?',
        a: 'Each recursive call creates a new stack frame storing local variables and return address. Stack builds up until base case, then unwinds solving subproblems.'
      },
      {
        q: 'When should we use recursion vs iteration?',
        a: 'Use recursion when problem can be broken into similar subproblems (like trees/graphs). Use iteration when solution is straightforward and stack space is a concern.'
      },
      {
        q: 'What is tail recursion?',
        a: 'Tail recursion is when recursive call is the last operation in function. It can be optimized by compiler to use constant stack space.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Recursion in C++',
      url: 'https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
      icon: Youtube,
      note: '* This video covers Functions and Basic Recursion'
    },
    {
      type: 'tutorial',
      title: 'Recursion Guide',
      url: 'https://www.geeksforgeeks.org/recursion/',
      icon: BookOpen
    }
  ]
};

export default BasicRecursion; 