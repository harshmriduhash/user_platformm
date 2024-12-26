import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BitManipulation = {
  title: 'Bit Manipulation',
  description: 'Master bit manipulation techniques and operations',
  
  conceptOverview: {
    introduction: 'Bit manipulation is a programming technique that involves the use of bitwise operations to manipulate individual bits of data. It is essential for optimizing performance and solving problems efficiently.',
    keyTakeaways: [
      'Understanding bitwise operators and their usage',
      'Common bit manipulation techniques',
      'Applications in competitive programming',
      'Memory optimization through bit manipulation',
      'Efficient data representation'
    ]
  },

  roadmapFit: {
    description: 'Bit manipulation is a fundamental concept that builds upon basic programming skills and is essential for efficient algorithm design.',
    connections: [
      'Prerequisite: Basic Mathematics',
      'Leads to: Advanced Data Structures',
      'Used in: Hashing and Cryptography',
      'Applied in: Problem Solving and Optimization'
    ]
  },

  sections: [
    {
      title: 'Basic Operations',
      items: [
        'Bitwise Operators',
        'Left/Right Shifts',
        'Setting Bits',
        'Clearing Bits',
        'Toggling Bits'
      ]
    },
    {
      title: 'Common Techniques',
      items: [
        'Checking Power of 2',
        'Counting Set Bits',
        'Finding Single Number',
        'Binary Number Properties',
        'Bit Masking'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Subset Generation',
        'XOR Properties',
        'Bit DP',
        'Memory Optimization',
        'State Compression'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Bit Manipulation Examples',
    examples: [
      {
        title: 'Checking if a Number is Power of 2',
        code:
`bool isPowerOfTwo(int n) {
    return (n > 0) && ((n & (n - 1)) == 0);
}`
      },
      {
        title: 'Counting Set Bits',
        code:
`int countSetBits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Off-by-one Errors',
        solution: 'Be careful with the left and right shifts to avoid losing bits.'
      },
      {
        issue: 'Not Handling Edge Cases',
        solution: 'Consider edge cases such as negative numbers or zero.'
      },
      {
        issue: 'Misunderstanding Bitwise Operations',
        solution: 'Ensure you understand the difference between bitwise and logical operators.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is bit manipulation?',
        a: 'Bit manipulation refers to the act of algorithmically manipulating bits or binary digits, which is often used for optimization and efficient data processing.'
      },
      {
        q: 'How do you check if a number is even or odd using bit manipulation?',
        a: 'You can check if a number is even or odd by using the expression `n & 1`. If the result is 0, the number is even; otherwise, it is odd.'
      },
      {
        q: 'What are some common applications of bit manipulation?',
        a: 'Common applications include optimizing algorithms, cryptography, and solving problems in competitive programming.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Bit Manipulation Playlist',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0rnqh8QsJaHyIX7KUiaPUv7&si=n6vaKTyoj-TdL-kJ',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems on Bit Manipulation',
      url: 'https://leetcode.com/tag/bit-manipulation/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Bit Manipulation Guide',
      url: 'https://www.geeksforgeeks.org/bits-manipulation-important-tactics/',
      icon: FileText
    }
  ]
};

export default BitManipulation; 