import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicMaths = {
  title: 'Basic Maths',
  description: 'Master fundamental mathematical concepts essential for programming',
  
  conceptOverview: {
    introduction: 'Basic mathematics forms the foundation for problem-solving in programming. Understanding these concepts is crucial for algorithmic thinking and implementing efficient solutions.',
    keyTakeaways: [
      'Number system and operations',
      'Prime numbers and factorization',
      'GCD and LCM calculations',
      'Basic number theory concepts',
      'Mathematical problem-solving'
    ]
  },

  roadmapFit: {
    description: 'Basic Maths builds upon pattern questions and prepares you for advanced mathematical concepts in programming:',
    connections: [
      'Pattern Questions - Apply mathematical logic in patterns',
      'Advanced Mathematics - Foundation for complex algorithms',
      'Data Structures - Mathematical basis for data organization',
      'Algorithm Analysis - Understanding time and space complexity',
      'Problem Solving - Mathematical approach to solutions'
    ]
  },

  sections: [
    {
      title: 'Core Mathematical Concepts',
      items: [
        'Number System and Operations',
        'Prime Numbers and Factorization',
        'GCD and LCM',
        'Fibonacci Series',
        'Armstrong Numbers',
        'Perfect Numbers'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Implementation Examples',
    examples: [
      {
        title: 'Prime Number Check',
        code:
`bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
      },
      {
        title: 'GCD Calculation',
        code:
`// Using Euclidean Algorithm
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM using GCD
int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}`
      },
      {
        title: 'Fibonacci Series',
        code:
`// Generate Fibonacci series up to n terms
void fibonacci(int n) {
    int first = 0, second = 1;
    
    for(int i = 0; i < n; i++) {
        cout << first << " ";
        int next = first + second;
        first = second;
        second = next;
    }
}`
      },
      {
        title: 'Armstrong Number Check',
        code:
`bool isArmstrong(int num) {
    int original = num;
    int sum = 0;
    int digits = log10(num) + 1;
    
    while (num > 0) {
        int digit = num % 10;
        sum += pow(digit, digits);
        num /= 10;
    }
    
    return sum == original;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Integer Overflow',
        solution: 'Use appropriate data types (long long) for large numbers and check for overflow conditions.'
      },
      {
        issue: 'Division by Zero',
        solution: 'Always check for zero before performing division operations.'
      },
      {
        issue: 'Precision Errors',
        solution: 'Be careful with floating-point comparisons and use appropriate precision handling.'
      },
      {
        issue: 'Algorithm Efficiency',
        solution: 'Optimize mathematical calculations for large inputs (e.g., using sqrt for prime checks).'
      },
      {
        issue: 'Edge Cases',
        solution: 'Consider boundary conditions like negative numbers, zero, and maximum values.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'How do you efficiently check if a number is prime?',
        a: 'Check divisibility up to square root of the number. Use optimization like checking only odd numbers after 2 and early termination on finding a divisor.'
      },
      {
        q: 'Explain the Euclidean algorithm for GCD.',
        a: 'It states that GCD of two numbers equals GCD of the smaller number and remainder when larger is divided by smaller. Continue until remainder is 0.'
      },
      {
        q: 'How do you handle very large numbers in mathematical calculations?',
        a: 'Use appropriate data types like long long, implement modular arithmetic, or use string-based calculations for extremely large numbers.'
      },
      {
        q: 'What is the relationship between GCD and LCM?',
        a: 'Product of GCD and LCM equals product of the two numbers: a * b = GCD(a,b) * LCM(a,b). This helps in efficient LCM calculation.'
      },
      {
        q: 'How do you generate Fibonacci numbers efficiently?',
        a: 'Use iterative approach with two variables instead of recursion. For very large numbers, use matrix exponentiation or maintain just the required terms.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Basic Math Concepts',
      url: 'https://www.youtube.com/watch?v=1xNbjMdbjug&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=7',
      icon: Youtube
    },
    {
      type: 'tutorial',
      title: 'Math for Programming',
      url: 'https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/',
      icon: BookOpen
    }
  ]
};

export default BasicMaths; 