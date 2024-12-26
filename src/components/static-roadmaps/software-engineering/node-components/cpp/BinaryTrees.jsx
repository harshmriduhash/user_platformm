import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BinaryTrees = {
  title: 'Binary Trees',
  description: 'Master binary tree concepts and implementations',
  
  conceptOverview: {
    introduction: 'Binary trees are hierarchical data structures where each node has at most two children, referred to as the left child and the right child. They are used to implement various data structures and algorithms.',
    keyTakeaways: [
      'Understanding tree terminology and properties',
      'Types of binary trees (full, complete, balanced)',
      'Tree traversals (inorder, preorder, postorder)',
      'Common operations: insertion, deletion, searching',
      'Applications of binary trees in algorithms'
    ]
  },

  roadmapFit: {
    description: 'Binary trees are fundamental for understanding more complex data structures and algorithms, such as binary search trees and heaps.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Binary Search Trees',
      'Used in: Tree Traversals',
      'Applied in: Expression Trees and Huffman Coding'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Tree Terminology',
        'Types of Binary Trees',
        'Tree Properties',
        'Tree Traversals',
        'Tree Construction'
      ]
    },
    {
      title: 'Tree Operations',
      items: [
        'Insertion and Deletion',
        'Height and Depth',
        'Lowest Common Ancestor',
        'Path Problems',
        'Tree Views'
      ]
    },
    {
      title: 'Advanced Concepts',
      items: [
        'Balanced Trees',
        'Tree Serialization',
        'Tree DP',
        'Morris Traversal',
        'Tree Isomorphism'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Binary Tree Examples',
    examples: [
      {
        title: 'Binary Tree Implementation',
        code:
`class Node {
    public:
        int data;
        Node* left;
        Node* right;
        Node(int val) : data(val), left(NULL), right(NULL) {}
};

class BinaryTree {
    private:
        Node* root;
    public:
        BinaryTree() : root(NULL) {}
        void insert(int val) {
            root = insertRec(root, val);
        }
    private:
        Node* insertRec(Node* node, int val) {
            if (node == NULL) {
                return new Node(val);
            }
            if (val < node->data) {
                node->left = insertRec(node->left, val);
            } else {
                node->right = insertRec(node->right, val);
            }
            return node;
        }
};`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect Tree Traversal',
        solution: 'Ensure that you understand the different traversal methods (inorder, preorder, postorder) and apply them correctly.'
      },
      {
        issue: 'Not Handling Null Pointers',
        solution: 'Always check for null pointers when traversing or modifying the tree to avoid segmentation faults.'
      },
      {
        issue: 'Misunderstanding Tree Properties',
        solution: 'Be clear on the properties of binary trees, such as height, depth, and balance, to avoid logical errors.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a binary tree?',
        a: 'A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.'
      },
      {
        q: 'What are the different types of binary trees?',
        a: 'The different types of binary trees include full binary trees, complete binary trees, balanced binary trees, and degenerate (or pathological) trees.'
      },
      {
        q: 'How do you find the height of a binary tree?',
        a: 'The height of a binary tree can be found using a recursive function that calculates the height of the left and right subtrees and returns the maximum of the two plus one.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Tree Masterclass',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&si=uXMI2NHjSjNTAxmB',
      note: '* Contains Trees, Binary Trees, and BSTs',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Binary Trees',
      url: 'https://leetcode.com/tag/binary-tree/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Binary Tree Guide',
      url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Tree Tutorial',
      url: 'https://www.programiz.com/dsa/binary-tree',
      icon: BookOpen
    }
  ]
};

export default BinaryTrees; 