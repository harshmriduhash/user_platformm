import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const LinkedList = {
  title: 'Linked List',
  description: 'Master linked list data structure and its operations',
  
  conceptOverview: {
    introduction: 'A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. This allows for efficient insertion and deletion of elements.',
    keyTakeaways: [
      'Understanding node structure and pointers',
      'Types of linked lists (singly, doubly, circular)',
      'Dynamic memory allocation',
      'Advantages and disadvantages of linked lists',
      'Common operations: insertion, deletion, traversal'
    ]
  },

  roadmapFit: {
    description: 'Linked lists are fundamental data structures that serve as building blocks for more complex data structures and algorithms.',
    connections: [
      'Data Structures - Foundation for trees and graphs',
      'Algorithm Design - Used in various algorithms for efficient data manipulation',
      'Memory Management - Understanding dynamic memory allocation and pointers',
      'Problem Solving - Commonly used in coding interviews and competitive programming'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Node Structure',
        'Singly Linked List',
        'Doubly Linked List',
        'Circular Linked List',
        'Memory Management'
      ]
    },
    {
      title: 'Basic Operations',
      items: [
        'Insertion Operations',
        'Deletion Operations',
        'Traversal Techniques',
        'Searching Elements',
        'List Modification'
      ]
    },
    {
      title: 'Advanced Operations',
      items: [
        'Reversing a List',
        'Detecting Cycles',
        'Finding Middle Element',
        'Merging Lists',
        'List Partitioning'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Linked List Implementation Examples',
    examples: [
      {
        title: 'Singly Linked List Implementation',
        code:
`// Node structure for singly linked list
struct Node {
    int data;
    Node* next;
};

// Function to insert a new node at the beginning
void insertAtBeginning(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}`
      },
      {
        title: 'Doubly Linked List Implementation',
        code:
`// Node structure for doubly linked list
struct Node {
    int data;
    Node* next;
    Node* prev;
};

// Function to insert a new node at the end
void insertAtEnd(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = nullptr;

    if (*head_ref == nullptr) {
        new_node->prev = nullptr;
        *head_ref = new_node;
        return;
    }

    Node* last = *head_ref;
    while (last->next != nullptr) {
        last = last->next;
    }

    last->next = new_node;
    new_node->prev = last;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Memory Leaks',
        solution: 'Always free memory allocated for nodes to avoid memory leaks.'
      },
      {
        issue: 'Null Pointer Dereference',
        solution: 'Check for null pointers before accessing node data.'
      },
      {
        issue: 'Incorrect Pointer Updates',
        solution: 'Ensure pointers are updated correctly during insertion and deletion operations.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a linked list?',
        a: 'A linked list is a linear data structure where each element is a separate object, and each element (node) contains a reference (link) to the next node in the sequence.'
      },
      {
        q: 'What are the advantages of linked lists over arrays?',
        a: 'Linked lists provide dynamic memory allocation, efficient insertions and deletions, and do not require contiguous memory allocation.'
      },
      {
        q: 'How do you detect a cycle in a linked list?',
        a: 'You can use Floyd’s Cycle-Finding Algorithm (Tortoise and Hare) to detect cycles in a linked list.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Linked List Playlist',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0rAuz8tVcM0AymmhTRsfaLU&si=tT-_C-wceOB9a1GA',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems on Linked Lists',
      url: 'https://leetcode.com/tag/linked-list/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Linked List Guide',
      url: 'https://www.geeksforgeeks.org/data-structures/linked-list/',
      icon: FileText
    }
  ]
};

export default LinkedList; 