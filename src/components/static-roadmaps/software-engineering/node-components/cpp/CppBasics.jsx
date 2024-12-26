import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const CppBasics = {
  title: 'C++ Basics',
  description: 'Master the fundamental concepts of C++ programming',
  
  conceptOverview: {
    introduction: 'C++ is a powerful general-purpose programming language that extends C with object-oriented features. It serves as the foundation for system programming, game development, and high-performance applications.',
    keyTakeaways: [
      'Strong type system for safer code',
      'Direct memory manipulation capabilities',
      'Object-oriented programming support',
      'Rich standard library (STL)',
      'High performance and efficiency'
    ]
  },

  roadmapFit: {
    description: 'C++ Basics is the cornerstone of your programming journey. Mastering these fundamentals will prepare you for:',
    connections: [
      'Pattern Questions - Apply basic syntax in pattern problems',
      'Functions - Build upon basic syntax for modular code',
      'STL - Use basic concepts in standard library',
      'Object-Oriented Programming - Extend basic syntax to classes',
      'Data Structures - Implement complex structures using basics'
    ]
  },

  sections: [
    {
      title: 'Core Concepts',
      items: [
        'Variables and Data Types',
        'Operators and Expressions',
        'Control Flow (if, loops)',
        'Input/Output Operations',
        'Basic Memory Concepts',
        'Object-Oriented Programming (Classes & Objects)'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Syntax Guide',
    examples: [
      {
        title: 'Basic Program Structure',
        code: 
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`
      },
      {
        title: 'Variables and Data Types',
        code:
`// Integer types
int age = 25;
long population = 7800000000L;

// Floating point types
float price = 99.99f;
double pi = 3.14159265359;

// Character and string
char grade = 'A';
string name = "John Doe";

// Boolean
bool isActive = true;`
      },
      {
        title: 'Control Flow',
        code:
`// If-else statement
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// For loop
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}

// While loop
int count = 0;
while (count < 5) {
    cout << count << " ";
    count++;
}`
      },
      {
        title: 'Classes and Objects',
        code:
`// Class definition
class Student {
private:
    string name;
    int age;
    
public:
    // Constructor
    Student(string n, int a) {
        name = n;
        age = a;
    }
    
    // Member function
    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Creating and using object
Student student1("John", 20);
student1.display();`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Uninitialized Variables',
        solution: 'Always initialize variables before using them to avoid undefined behavior.'
      },
      {
        issue: 'Integer Division Issues',
        solution: 'Be aware that integer division truncates decimals. Use type casting when floating-point division is needed.'
      },
      {
        issue: 'Array Bounds',
        solution: 'Always check array indices to prevent buffer overflows and undefined behavior.'
      },
      {
        issue: 'Memory Management',
        solution: 'Properly deallocate dynamically allocated memory to prevent memory leaks.'
      },
      {
        issue: 'Buffer Overflows',
        solution: 'Use proper string handling and array bounds checking to prevent buffer overflows.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What are the fundamental data types in C++?',
        a: 'C++ has int (integers), float/double (decimal numbers), char (single characters), bool (true/false), and void. Each type can be modified with signed/unsigned and short/long.'
      },
      {
        q: 'Explain the difference between = and == operators.',
        a: '= is the assignment operator used to assign values to variables, while == is the comparison operator used to check if two values are equal.'
      },
      {
        q: 'What is the difference between while and do-while loops?',
        a: 'while loop checks the condition first then executes the code block. do-while loop executes the code block first, then checks the condition, ensuring at least one execution.'
      },
      {
        q: 'What is the difference between cin and cout?',
        a: 'cin is used for input from keyboard using the extraction operator >>, while cout is used for output to screen using the insertion operator <<.'
      },
      {
        q: 'How does memory allocation work for different data types?',
        a: 'Each data type requires different memory: int typically uses 4 bytes, char uses 1 byte, float uses 4 bytes, and double uses 8 bytes. The exact size can vary by system.'
      },
      {
        q: 'What are the basic concepts of OOP in C++?',
        a: 'The main concepts are: Classes (templates for objects), Objects (instances of classes), Encapsulation (data hiding), and Methods (functions that operate on class data).'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'C++ Video Tutorial',
      url: 'https://youtu.be/EAR7De6Goz4?si=C_fHwYHmg8mT_l9-',
      icon: Youtube
    },
    {
      type: 'video',
      title: 'C++ OOP Tutorial',
      url: 'https://www.youtube.com/watch?v=wN0x9eZLix4',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://www.hackerrank.com/domains/cpp/cpp-introduction',
      icon: Code2
    },
    {
      type: 'tutorial',
      title: 'GeeksforGeeks C++ Guide',
      url: 'https://www.geeksforgeeks.org/c-plus-plus/',
      icon: BookOpen
    }
  ]
};

export default CppBasics; 