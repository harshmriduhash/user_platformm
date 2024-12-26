import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BinarySearch = {
  title: 'Binary Search',
  description: 'Master the binary search algorithm and its variations',
  
  conceptOverview: {
    introduction: 'Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half.',
    keyTakeaways: [
      'Understanding the binary search algorithm',
      'Time complexity analysis',
      'Iterative vs recursive implementation',
      'Applications of binary search',
      'Search space understanding'
    ]
  },

  roadmapFit: {
    description: 'Binary search is a fundamental algorithm that is widely used in various applications:',
    connections: [
      'Sorting Algorithms - Binary search requires sorted data',
      'Data Structures - Often used with arrays and trees',
      'Algorithm Design - A basis for more complex algorithms',
      'Problem Solving - Commonly used in competitive programming'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Binary Search Algorithm',
        'Time Complexity Analysis',
        'Iterative Implementation',
        'Recursive Implementation',
        'Search Space Understanding'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Lower and Upper Bound',
        'Binary Search on Answer',
        'Search in Rotated Array',
        'Peak Element Finding',
        'Matrix Binary Search'
      ]
    },
    {
      title: 'Problem Patterns',
      items: [
        'Monotonic Functions',
        'Minimizing Maximum',
        'Maximizing Minimum',
        'Finding K-th Element',
        'Range-based Problems'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Binary Search Implementation Examples',
    examples: [
      {
        title: 'Basic Binary Search',
        code:
`// Binary Search implementation
int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;  // Target found
        }
        if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }
    return -1;  // Target not found
}`
      },
      {
        title: 'Recursive Binary Search',
        code:
`// Recursive Binary Search implementation
int recursiveBinarySearch(int arr[], int left, int right, int target) {
    if (left > right) {
        return -1;  // Target not found
    }
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) {
        return mid;  // Target found
    }
    if (arr[mid] < target) {
        return recursiveBinarySearch(arr, mid + 1, right, target);  // Search in the right half
    } else {
        return recursiveBinarySearch(arr, left, mid - 1, target);  // Search in the left half
    }
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Off-by-one Errors',
        solution: 'Be careful with the left and right pointers to avoid infinite loops or missing the target.'
      },
      {
        issue: 'Not Handling Edge Cases',
        solution: 'Consider edge cases such as empty arrays or arrays with one element.'
      },
      {
        issue: 'Assuming Sorted Input',
        solution: 'Ensure the input array is sorted before applying binary search.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the time complexity of binary search?',
        a: 'Binary search has a time complexity of O(log n).'
      },
      {
        q: 'Can binary search be applied to unsorted arrays?',
        a: 'No, binary search requires the array to be sorted.'
      },
      {
        q: 'What are some applications of binary search?',
        a: 'Binary search can be used in searching algorithms, finding square roots, and in various optimization problems.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Binary Search Playlist',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&si=r1KoKFpOPSIh-TeD',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Problems',
      url: 'https://leetcode.com/tag/binary-search/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Binary Search Guide',
      url: 'https://www.geeksforgeeks.org/binary-search/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Binary Search Patterns',
      url: 'https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template',
      icon: BookOpen
    }
  ]
};

export default BinarySearch; 