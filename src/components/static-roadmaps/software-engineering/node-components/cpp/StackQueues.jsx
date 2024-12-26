import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const StackQueues = {
  title: 'Stack/Queues',
  description: 'Master stack and queue data structures and their applications',
  
  conceptOverview: {
    introduction: 'Stacks and queues are fundamental data structures that are used to store and manage data in a specific order. A stack follows the Last In First Out (LIFO) principle, while a queue follows the First In First Out (FIFO) principle.',
    keyTakeaways: [
      'Understanding stack and queue operations',
      'Implementing stacks and queues using arrays and linked lists',
      'Identifying use cases for stacks and queues',
      'Analyzing time complexity for stack and queue operations',
      'Common applications in algorithm design'
    ]
  },

  roadmapFit: {
    description: 'Stacks and queues are essential for understanding more complex data structures and algorithms. They are widely used in various applications, including parsing expressions and managing tasks in programming.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Advanced Data Structures',
      'Used in: Algorithm Design',
      'Applied in: Problem Solving and Optimization'
    ]
  },

  sections: [
    {
      title: 'Stack Operations',
      items: [
        'Push and Pop Operations',
        'Stack Implementation',
        'Stack using Arrays',
        'Stack using LinkedList',
        'Stack STL'
      ]
    },
    {
      title: 'Queue Operations',
      items: [
        'Enqueue and Dequeue',
        'Queue Implementation',
        'Circular Queue',
        'Priority Queue',
        'Double Ended Queue'
      ]
    },
    {
      title: 'Applications',
      items: [
        'Expression Evaluation',
        'Parentheses Matching',
        'Next Greater Element',
        'Sliding Window Maximum',
        'LRU Cache'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Stack and Queue Examples',
    examples: [
      {
        title: 'Stack Implementation using Array',
        code:
`class Stack {
    private:
        int top;
        int arr[MAX];
    public:
        Stack() { top = -1; }
        void push(int x) {
            if (top >= (MAX - 1)) {
                cout << "Stack Overflow";
            } else {
                arr[++top] = x;
            }
        }
        int pop() {
            if (top < 0) {
                cout << "Stack Underflow";
                return 0;
            } else {
                return arr[top--];
            }
        }
};`
      },
      {
        title: 'Queue Implementation using Linked List',
        code:
`class Node {
    public:
        int data;
        Node* next;
};

class Queue {
    private:
        Node* front;
        Node* rear;
    public:
        Queue() { front = rear = NULL; }
        void enqueue(int x) {
            Node* temp = new Node();
            temp->data = x;
            temp->next = NULL;
            if (rear == NULL) {
                front = rear = temp;
                return;
            }
            rear->next = temp;
            rear = temp;
        }
        int dequeue() {
            if (front == NULL) return 0;
            Node* temp = front;
            front = front->next;
            if (front == NULL) rear = NULL;
            int data = temp->data;
            delete temp;
            return data;
        }
};`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect Stack/Queue Size Management',
        solution: 'Ensure that the stack or queue size is managed correctly to avoid overflow or underflow errors.'
      },
      {
        issue: 'Not Handling Edge Cases',
        solution: 'Consider edge cases such as empty stacks or queues when performing operations.'
      },
      {
        issue: 'Misunderstanding LIFO and FIFO',
        solution: 'Be clear on the differences between stack (LIFO) and queue (FIFO) operations to avoid logical errors.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the difference between a stack and a queue?',
        a: 'A stack follows the Last In First Out (LIFO) principle, while a queue follows the First In First Out (FIFO) principle.'
      },
      {
        q: 'Can you implement a stack using a queue?',
        a: 'Yes, a stack can be implemented using two queues by using one queue to hold the elements and the other to reverse the order.'
      },
      {
        q: 'What are some applications of stacks?',
        a: 'Stacks are used in function call management, expression evaluation, and backtracking algorithms.'
      },
      {
        q: 'What are some applications of queues?',
        a: 'Queues are used in scheduling tasks, breadth-first search algorithms, and managing requests in web servers.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Stack/Queues Playlist',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0pOd5zvVVSzgpo6BaCpHT9c&si=ICMLSPyyHLQ_vRDr',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Stack',
      url: 'https://leetcode.com/tag/stack/',
      icon: Code2
    },
    {
      type: 'practice',
      title: 'Practice Queue',
      url: 'https://leetcode.com/problem-list/queue/',
      icon: Code2
    },
    {
      type: 'tutorial',
      title: 'Implementation Tutorial',
      url: 'https://www.programiz.com/dsa/stack',
      icon: BookOpen
    }
  ]
};

export default StackQueues; 