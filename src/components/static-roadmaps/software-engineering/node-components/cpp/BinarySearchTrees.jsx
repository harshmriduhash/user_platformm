import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BinarySearchTrees = {
  title: 'Binary Search Trees',
  description: 'Master Binary Search Tree operations and applications',
  
  conceptOverview: {
    introduction: 'Binary Search Trees (BST) are a type of binary tree where the left child of a node contains only nodes with values less than the node’s value, and the right child only nodes with values greater than the node’s value. This property makes BSTs efficient for searching, insertion, and deletion operations.',
    keyTakeaways: [
      'Understanding BST properties and structure',
      'Efficient search, insert, and delete operations',
      'Inorder traversal results in sorted order',
      'Applications of BSTs in various algorithms',
      'Balancing BSTs for optimal performance'
    ]
  },

  roadmapFit: {
    description: 'Binary Search Trees are fundamental for understanding more complex data structures and algorithms, such as self-balancing trees and heaps.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Self-balancing Trees',
      'Used in: Searching Algorithms',
      'Applied in: Database Indexing'
    ]
  },

  sections: [
    {
      title: 'BST Properties',
      items: [
        'BST Definition',
        'Inorder Properties',
        'Search Operation',
        'Insertion Operation',
        'Deletion Operation'
      ]
    },
    {
      title: 'BST Operations',
      items: [
        'Finding Min/Max',
        'Predecessor/Successor',
        'Floor/Ceil Values',
        'Range Queries',
        'Balancing BST'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'Self-balancing BSTs',
        'AVL Trees',
        'Red-Black Trees',
        'B-Trees',
        'Treap'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Binary Search Tree Examples',
    examples: [
      {
        title: 'Binary Search Tree Implementation',
        code:
`class Node {
    public:
        int data;
        Node* left;
        Node* right;
        Node(int val) : data(val), left(NULL), right(NULL) {}
};

class BinarySearchTree {
    private:
        Node* root;
    public:
        BinarySearchTree() : root(NULL) {}
        
        void insert(int val) {
            root = insertRec(root, val);
        }
        
        Node* search(int val) {
            return searchRec(root, val);
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
        
        Node* searchRec(Node* node, int val) {
            if (node == NULL || node->data == val) {
                return node;
            }
            if (val < node->data) {
                return searchRec(node->left, val);
            }
            return searchRec(node->right, val);
        }
};`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect BST Property Maintenance',
        solution: 'Ensure that the BST properties are maintained during insertion and deletion operations.'
      },
      {
        issue: 'Not Handling Null Pointers',
        solution: 'Always check for null pointers when traversing or modifying the tree to avoid segmentation faults.'
      },
      {
        issue: 'Misunderstanding Tree Balancing',
        solution: 'Be aware of the need for balancing in BSTs to maintain optimal performance.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a binary search tree?',
        a: 'A binary search tree is a binary tree where the left child of a node contains only nodes with values less than the node’s value, and the right child only nodes with values greater than the node’s value.'
      },
      {
        q: 'How do you perform an inorder traversal of a BST?',
        a: 'Inorder traversal of a BST involves visiting the left subtree, the root node, and then the right subtree, which results in sorted order of the elements.'
      },
      {
        q: 'What are the time complexities for search, insert, and delete operations in a BST?',
        a: 'The average time complexity for search, insert, and delete operations in a BST is O(log n), but in the worst case (unbalanced tree), it can degrade to O(n).'
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
      title: 'Practice BSTs',
      url: 'https://leetcode.com/tag/binary-search-tree/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'BST Documentation',
      url: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'BST Tutorial',
      url: 'https://www.programiz.com/dsa/binary-search-tree',
      icon: BookOpen
    }
  ]
};

export default BinarySearchTrees; 