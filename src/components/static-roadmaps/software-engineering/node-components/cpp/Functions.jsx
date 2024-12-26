import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Functions = {
  title: 'Functions',
  description: 'Master function concepts and implementations in C++',
  
  conceptOverview: {
    introduction: 'Functions are building blocks of modular programming that help break down complex problems into smaller, manageable pieces. They promote code reusability, maintainability, and better organization of programs.',
    keyTakeaways: [
      'Function declaration and definition',
      'Parameter passing mechanisms',
      'Return types and values',
      'Function overloading',
      'Inline functions and recursion'
    ]
  },

  roadmapFit: {
    description: 'Functions are essential for writing organized and efficient code. Understanding functions prepares you for:',
    connections: [
      'Basic Recursion - Foundation for recursive problem solving',
      'Object-Oriented Programming - Methods in classes',
      'STL - Using built-in functions and algorithms',
      'Code Organization - Modular programming approach'
    ]
  },

  sections: [
    {
      title: 'Core Function Concepts',
      items: [
        'Function Declaration and Definition',
        'Parameters and Arguments',
        'Return Types and Values',
        'Pass by Value vs Reference',
        'Function Overloading',
        'Default Arguments'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Function Examples',
    examples: [
      {
        title: 'Basic Function Structure',
        code:
`// Function Declaration
int add(int a, int b);

// Function Definition
int add(int a, int b) {
    return a + b;
}

// Function Call
int result = add(5, 3);  // result = 8`
      },
      {
        title: 'Pass by Value vs Reference',
        code:
`// Pass by Value
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}  // Original values remain unchanged

// Pass by Reference
void swapByReference(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}  // Original values are swapped`
      },
      {
        title: 'Function Overloading',
        code:
`// Function overloading with different parameter types
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

string add(string a, string b) {
    return a + b;
}`
      },
      {
        title: 'Default Arguments',
        code:
`// Function with default arguments
void printDetails(string name, int age = 20, string city = "Unknown") {
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "City: " << city << endl;
}

// Different ways to call
printDetails("John", 25, "New York");  // All parameters
printDetails("Jane", 22);              // Using default city
printDetails("Bob");                   // Using default age and city`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Function Declaration Missing',
        solution: 'Always declare functions before using them, either through forward declaration or complete definition.'
      },
      {
        issue: 'Return Type Mismatch',
        solution: 'Ensure the return type matches the function declaration and handle all return paths.'
      },
      {
        issue: 'Reference Parameter Issues',
        solution: 'Be careful with reference parameters and ensure they are properly initialized before passing.'
      },
      {
        issue: 'Overloading Ambiguity',
        solution: 'Avoid ambiguous function overloads that could confuse the compiler about which version to call.'
      },
      {
        issue: 'Default Argument Order',
        solution: 'Default arguments must be added from right to left in the parameter list.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the difference between pass by value and pass by reference?',
        a: 'Pass by value creates a copy of the argument, while pass by reference allows direct access to the original variable. Reference parameters can modify the original values.'
      },
      {
        q: 'How does function overloading work in C++?',
        a: 'Function overloading allows multiple functions with the same name but different parameter types or number of parameters. The compiler selects the appropriate version based on the arguments.'
      },
      {
        q: 'What are inline functions?',
        a: "Inline functions suggest the compiler to insert the function code directly at the call site instead of making a function call, potentially improving performance for small functions."
      },
      {
        q: 'Explain default arguments in functions.',
        a: 'Default arguments provide default values for parameters. If an argument is not provided in the function call, the default value is used. They must be specified from right to left.'
      },
      {
        q: 'What is function prototype/declaration?',
        a: "A function prototype declares the function interface (return type, name, and parameters) without the implementation. It allows the compiler to check function calls before the actual definition."
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Functions in C++',
      url: 'https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
      icon: Youtube,
      note: '* This video covers Functions and Basic Recursion'
    },
    {
      type: 'tutorial',
      title: 'Functions Guide',
      url: 'https://www.geeksforgeeks.org/functions-in-cpp/',
      icon: BookOpen
    }
  ]
};

export default Functions; 