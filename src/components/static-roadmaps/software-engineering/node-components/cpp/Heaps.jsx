import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Heaps = {
  title: 'Heaps',
  description: 'Master heap data structure and priority queue implementations',
  
  conceptOverview: {
    introduction: 'Heaps are specialized tree-based data structures that satisfy the heap property. In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. In a min heap, the value of the node is less than or equal to the values of its children.',
    keyTakeaways: [
      'Understanding heap properties and types (min and max heaps)',
      'Implementing heaps using arrays and linked lists',
      'Heap operations: insert, delete, and heapify',
      'Applications of heaps in algorithms',
      'Analyzing time complexity for heap operations'
    ]
  },

  roadmapFit: {
    description: 'Heaps are essential for implementing priority queues and are foundational for understanding more complex algorithms like Dijkstra’s and Prim’s.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Graph Algorithms',
      'Used in: Priority Queues',
      'Applied in: Scheduling and Resource Allocation'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Binary Heap Properties',
        'Min Heap vs Max Heap',
        'Heap Operations',
        'Heapify Process',
        'Priority Queue'
      ]
    },
    {
      title: 'Implementation',
      items: [
        'Array Implementation',
        'STL Priority Queue',
        'Custom Comparators',
        'Heap Sort',
        'K-way Merge'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'K Largest Elements',
        'Median in Stream',
        'Merge K Sorted Arrays',
        'Task Scheduling',
        'Graph Algorithms'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Heap Examples',
    examples: [
      {
        title: 'Max Heap Implementation',
        code:
`class MaxHeap {
    private:
        vector<int> heap;
    public:
        void insert(int val) {
            heap.push_back(val);
            int index = heap.size() - 1;
            while (index > 0) {
                int parent = (index - 1) / 2;
                if (heap[parent] < heap[index]) {
                    swap(heap[parent], heap[index]);
                    index = parent;
                } else {
                    break;
                }
            }
        }
        int extractMax() {
            if (heap.empty()) return -1; // or throw an exception
            int maxVal = heap[0];
            heap[0] = heap.back();
            heap.pop_back();
            heapify(0);
            return maxVal;
        }
    private:
        void heapify(int index) {
            int left = 2 * index + 1;
            int right = 2 * index + 2;
            int largest = index;
            if (left < heap.size() && heap[left] > heap[largest]) largest = left;
            if (right < heap.size() && heap[right] > heap[largest]) largest = right;
            if (largest != index) {
                swap(heap[index], heap[largest]);
                heapify(largest);
            }
        }
};`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect Heap Property Maintenance',
        solution: 'Ensure that the heap property is maintained after every insertion and deletion operation.'
      },
      {
        issue: 'Not Handling Edge Cases',
        solution: 'Consider edge cases such as empty heaps when performing operations.'
      },
      {
        issue: 'Misunderstanding Heap Operations',
        solution: 'Be clear on the differences between insert, extract, and heapify operations to avoid logical errors.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a heap?',
        a: 'A heap is a specialized tree-based data structure that satisfies the heap property, where the parent node is either greater than or equal to (max heap) or less than or equal to (min heap) its children.'
      },
      {
        q: 'How do you implement a priority queue using a heap?',
        a: 'A priority queue can be implemented using a heap by using the heap to store elements and ensuring that the highest (or lowest) priority element can be accessed in constant time.'
      },
      {
        q: 'What are the time complexities for heap operations?',
        a: 'Insertion and deletion operations in a heap have a time complexity of O(log n), while accessing the maximum or minimum element is O(1).'
      }
    ]
  },

  resources: [
    {
      type: 'tutorial',
      title: 'Heap Tutorial',
      url: 'https://www.programiz.com/dsa/heap-data-structure',
      icon: BookOpen
    },
    {
      type: 'practice',
      title: 'Heap Problems',
      url: 'https://leetcode.com/tag/heap-priority-queue/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Heap Data Structure',
      url: 'https://www.geeksforgeeks.org/heap-data-structure/',
      icon: FileText
    }
  ]
};

export default Heaps; 