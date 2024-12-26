import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Tries = {
  title: 'Tries',
  description: 'Master Trie data structure and its applications',
  
  conceptOverview: {
    introduction: 'A Trie, also known as a prefix tree, is a specialized tree-like data structure that is used to store a dynamic set of strings, where the keys are usually strings. It is particularly useful for tasks such as autocomplete and spell checking.',
    keyTakeaways: [
      'Understanding the structure and properties of Tries',
      'Efficient insertion, search, and deletion operations',
      'Applications in autocomplete and spell checking',
      'Memory efficiency compared to other data structures',
      'Common use cases in competitive programming and real-world applications'
    ]
  },

  roadmapFit: {
    description: 'Tries are essential for solving problems related to string manipulation and searching, and they are foundational for understanding more complex data structures.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Advanced String Algorithms',
      'Used in: Autocomplete Systems',
      'Applied in: Dictionary Implementations'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Trie Structure',
        'Node Implementation',
        'Insertion Operation',
        'Search Operation',
        'Deletion Operation'
      ]
    },
    {
      title: 'Advanced Operations',
      items: [
        'Prefix Matching',
        'Pattern Matching',
        'Word Break Problem',
        'Auto-complete Feature',
        'Memory Optimization'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Dictionary Implementation',
        'Spell Checker',
        'Contact List',
        'IP Routing Tables',
        'XOR Problems'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Trie Examples',
    examples: [
      {
        title: 'Trie Node Implementation',
        code:
`class TrieNode {
    public:
        TrieNode* children[26]; // Assuming only lowercase a-z
        bool isEndOfWord;

        TrieNode() {
            isEndOfWord = false;
            for (int i = 0; i < 26; i++) {
                children[i] = nullptr;
            }
        }
};`
      },
      {
        title: 'Trie Implementation with Insert and Search',
        code:
`class Trie {
    private:
        TrieNode* root;

    public:
        Trie() {
            root = new TrieNode();
        }

        void insert(string word) {
            TrieNode* node = root;
            for (char c : word) {
                int index = c - 'a';
                if (node->children[index] == nullptr) {
                    node->children[index] = new TrieNode();
                }
                node = node->children[index];
            }
            node->isEndOfWord = true;
        }

        bool search(string word) {
            TrieNode* node = root;
            for (char c : word) {
                int index = c - 'a';
                if (node->children[index] == nullptr) {
                    return false;
                }
                node = node->children[index];
            }
            return node->isEndOfWord;
        }
};`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect Character Indexing',
        solution: 'Ensure that the character indexing is correctly calculated based on the character set used (e.g., a-z).'
      },
      {
        issue: 'Not Handling End of Word Properly',
        solution: 'Always set the isEndOfWord flag correctly to indicate the end of a valid word.'
      },
      {
        issue: 'Memory Management Issues',
        solution: 'Be cautious with memory allocation and deallocation to avoid memory leaks.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a Trie?',
        a: 'A Trie is a tree-like data structure that stores a dynamic set of strings, where the keys are usually strings, and it allows for efficient retrieval of keys based on their prefixes.'
      },
      {
        q: 'What are the time complexities for insertion and search operations in a Trie?',
        a: 'The time complexity for both insertion and search operations in a Trie is O(m), where m is the length of the word being inserted or searched.'
      },
      {
        q: 'What are some applications of Tries?',
        a: 'Tries are commonly used in autocomplete systems, spell checkers, and for implementing dictionaries.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Trie Masterclass',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&si=ZapFbzYFXe96Xqgr',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Trie Problems',
      url: 'https://leetcode.com/tag/trie/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Trie Data Structure',
      url: 'https://www.geeksforgeeks.org/trie-insert-and-search/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Trie Tutorial',
      url: 'https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/',
      icon: BookOpen
    }
  ]
};

export default Tries; 