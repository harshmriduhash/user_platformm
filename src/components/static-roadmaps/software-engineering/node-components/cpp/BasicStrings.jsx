import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicStrings = {
  title: 'Basic Strings',
  description: 'Master string manipulation and operations in C++',
  
  conceptOverview: {
    introduction: 'Strings are fundamental data structures used to store and manipulate sequences of characters. Understanding string operations is crucial for text processing and many programming applications.',
    keyTakeaways: [
      'String declaration and initialization',
      'String manipulation operations',
      'Character-level operations',
      'String traversal techniques',
      'Common string algorithms'
    ]
  },

  roadmapFit: {
    description: 'Basic Strings builds upon array concepts and prepares you for advanced string algorithms:',
    connections: [
      'Arrays - Foundation for string implementation',
      'STL - String class and utilities',
      'Advanced Strings - Complex string algorithms',
      'Pattern Matching - String searching techniques',
      'Problem Solving - String-based problems'
    ]
  },

  sections: [
    {
      title: 'Key Concepts',
      items: [
        'String Declaration',
        'String Functions',
        'String Traversal',
        'Character Operations',
        'String Concatenation'
      ]
    }
  ],

  syntaxGuide: {
    title: 'String Implementation Examples',
    examples: [
      {
        title: 'String Basics',
        code:
`// String declaration and initialization
string str1 = "Hello";
string str2("World");

// String concatenation
string result = str1 + " " + str2;  // "Hello World"

// String length and access
int length = str1.length();
char firstChar = str1[0];  // 'H'
char lastChar = str1.back();  // 'o'`
      },
      {
        title: 'String Operations',
        code:
`// Substring operations
string str = "Hello World";
string sub = str.substr(0, 5);  // "Hello"

// String comparison
if (str1 == str2) {  // Compare content
    cout << "Strings are equal\\n";
}

// Case conversion
transform(str.begin(), str.end(), str.begin(), ::toupper);
transform(str.begin(), str.end(), str.begin(), ::tolower);`
      },
      {
        title: 'String Algorithms',
        code:
`// Check palindrome
bool isPalindrome(string str) {
    int left = 0, right = str.length() - 1;
    while (left < right) {
        if (str[left] != str[right])
            return false;
        left++;
        right--;
    }
    return true;
}

// Check anagram
bool isAnagram(string s1, string s2) {
    if (s1.length() != s2.length())
        return false;
        
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
    return s1 == s2;
}`
      },
      {
        title: 'String Manipulation',
        code:
`// String reversal
reverse(str.begin(), str.end());

// Find and replace
size_t pos = str.find("old");
if (pos != string::npos) {
    str.replace(pos, 3, "new");
}

// String splitting
stringstream ss(str);
string word;
while (ss >> word) {
    cout << word << "\\n";
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Buffer Overflow',
        solution: 'Always check string bounds before accessing characters. Use string methods instead of C-style operations.'
      },
      {
        issue: 'String Comparison',
        solution: 'Use string comparison methods instead of comparing character by character. Be aware of case sensitivity.'
      },
      {
        issue: 'Memory Management',
        solution: 'C++ strings handle memory automatically, but be careful when converting between C and C++ strings.'
      },
      {
        issue: 'String Modification',
        solution: 'Strings are mutable in C++, but operations like concatenation create new strings. Use appropriate methods for efficiency.'
      },
      {
        issue: 'Character Encoding',
        solution: 'Be aware of character encoding issues, especially when handling special characters or international text.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the difference between C-style strings and C++ strings?',
        a: 'C++ strings are objects that handle memory automatically and provide many built-in functions. C-style strings are character arrays terminated by null character and require manual memory management.'
      },
      {
        q: 'How do you check if a string is a palindrome?',
        a: 'Use two pointers (start and end) and compare characters while moving towards the center. Alternatively, compare the string with its reverse.'
      },
      {
        q: 'Explain string concatenation in C++.',
        a: 'C++ strings can be concatenated using the + operator or append() method. The + operator creates a new string while append() modifies the existing string.'
      },
      {
        q: 'How do you convert string to lowercase/uppercase?',
        a: 'Use transform() with ::tolower or ::toupper, or iterate through the string using tolower()/toupper() for each character.'
      },
      {
        q: 'What is string tokenization?',
        a: 'Breaking a string into smaller parts (tokens) based on a delimiter. Can be done using stringstream, strtok(), or string\'s find() and substr() methods.'
      }
    ]
  },

  resources: [
    {
      type: 'tutorial',
      title: 'GeeksforGeeks Strings Documentation',
      url: 'https://www.geeksforgeeks.org/string-data-structure/',
      icon: BookOpen
    },
    {
      type: 'practice',
      title: 'String Problems',
      url: 'https://leetcode.com/tag/string/',
      icon: Code2
    }
  ]
};

export default BasicStrings; 