import React from 'react';
import { Youtube, BookOpen, Code2, Library } from 'lucide-react';

const BasicHashing = {
  title: 'Basic Hashing in C++',
  description: 'Learn about hashing techniques and their implementation in C++',

  conceptOverview: {
    introduction: 'Hashing is a technique used to store and retrieve data in O(1) time complexity on average. It maps data of arbitrary size to fixed-size values.',
    keyTakeaways: [
      'Understanding hash functions and their properties',
      'Using arrays for frequency counting',
      'Handling collisions in hash tables',
      'Time complexity benefits of hashing'
    ]
  },

  roadmapFit: {
    description: 'Hashing is a fundamental concept that builds upon array knowledge and is essential for efficient data storage and retrieval.',
    connections: [
      'Prerequisite: Basic Arrays',
      'Leads to: Advanced Data Structures',
      'Used in: Hash Maps and Sets',
      'Applied in: Problem Solving and Optimization'
    ]
  },

  sections: [
    {
      title: 'Key Concepts',
      items: [
        'Hash Functions and their properties',
        'Collision handling techniques',
        'Array-based hashing implementation',
        'Applications of hashing'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Implementation Examples',
    examples: [
      {
        title: 'Basic Array Hashing',
        code: `// Counting frequencies using hashing
void countFrequency(int arr[], int n) {
    int hash[13] = {0};  // Initialize hash array
    
    // Store the frequency
    for(int i = 0; i < n; i++) {
        hash[arr[i]]++;
    }
    
    // Print the frequencies
    for(int i = 0; i < 13; i++) {
        if(hash[i] > 0) {
            cout << i << " occurs " << hash[i] << " times\\n";
        }
    }
}`
      },
      {
        title: 'Character Frequency Count',
        code: `// Count frequency of characters
void charFrequency(string str) {
    int hash[26] = {0};  // For lowercase letters
    
    for(char c : str) {
        hash[c - 'a']++;
    }
    
    for(int i = 0; i < 26; i++) {
        if(hash[i] > 0) {
            cout << char(i + 'a') << ": " << hash[i] << "\\n";
        }
    }
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls',
    mistakes: [
      {
        issue: 'Not checking array bounds',
        solution: 'Always ensure the hash array size is sufficient for your input range'
      },
      {
        issue: 'Forgetting to initialize the hash array',
        solution: 'Initialize all elements to 0 using array initialization or memset'
      },
      {
        issue: 'Incorrect hash function',
        solution: 'Ensure your hash function distributes values uniformly across the array'
      }
    ]
  },

  resources: [
    {
      title: 'Complete Hashing Tutorial',
      url: 'https://youtu.be/KEs5UyBJ39g',
      type: 'video',
      icon: Youtube
    },
    {
      title: 'LeetCode: Two Sum',
      url: 'https://leetcode.com/problems/two-sum/',
      type: 'practice',
      icon: Code2,
      note: 'Easy - Classic hash table problem'
    },
    {
      title: 'LeetCode: Contains Duplicate',
      url: 'https://leetcode.com/problems/contains-duplicate/',
      type: 'practice',
      icon: Code2,
      note: 'Easy - Hash set application'
    },
    {
      title: 'LeetCode: Valid Anagram',
      url: 'https://leetcode.com/problems/valid-anagram/',
      type: 'practice',
      icon: Code2,
      note: 'Easy - Character frequency counting'
    },
    {
      title: 'LeetCode: First Unique Character',
      url: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
      type: 'practice',
      icon: Code2,
      note: 'Easy - Hash map frequency count'
    },
    {
      title: 'Hashing Theory Guide',
      url: 'https://www.geeksforgeeks.org/hashing-data-structure/',
      type: 'tutorial',
      icon: BookOpen
    }
  ],

  interviewQuestions: {
    title: 'Common Interview Questions',
    questions: [
      {
        q: 'What is the time complexity of hashing operations?',
        a: 'Average case: O(1) for insertion, deletion, and search. Worst case: O(n) when there are many collisions.'
      },
      {
        q: 'How do you handle collisions in hashing?',
        a: 'Common methods include chaining (using linked lists), open addressing (linear probing, quadratic probing), and double hashing.'
      },
      {
        q: 'What makes a good hash function?',
        a: 'A good hash function should be uniform, deterministic, and efficient to compute. It should minimize collisions and distribute values evenly.'
      }
    ]
  }
};

export default BasicHashing; 