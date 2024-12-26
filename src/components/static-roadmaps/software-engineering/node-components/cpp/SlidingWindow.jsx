import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const SlidingWindow = {
  title: 'Sliding Window / Two Pointer Techniques',
  description: 'Master sliding window and two pointer techniques',
  
  conceptOverview: {
    introduction: 'Sliding window and two pointer techniques are powerful methods for solving problems involving sequences or arrays. The sliding window technique allows you to maintain a subset of elements in a contiguous block, while the two pointer technique uses two pointers to traverse the data structure, often from opposite ends.',
    keyTakeaways: [
      'Understanding the sliding window technique for subarray problems',
      'Utilizing two pointers for efficient traversal',
      'Identifying problems suitable for these techniques',
      'Analyzing time complexity and space efficiency',
      'Common applications in competitive programming'
    ]
  },

  roadmapFit: {
    description: 'These techniques are essential for optimizing algorithms that involve searching and manipulating sequences, and they are foundational for more advanced algorithmic strategies.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Advanced Algorithm Techniques',
      'Used in: Array and String Manipulation',
      'Applied in: Problem Solving and Optimization'
    ]
  },

  sections: [
    {
      title: 'Sliding Window Basics',
      items: [
        'Fixed Size Window',
        'Variable Size Window',
        'Window Expansion',
        'Window Contraction',
        'Window State Management'
      ]
    },
    {
      title: 'Two Pointer Techniques',
      items: [
        'Same Direction Pointers',
        'Opposite Direction Pointers',
        'Fast and Slow Pointers',
        'Multiple Pointers',
        'Cyclic Detection'
      ]
    },
    {
      title: 'Common Problems',
      items: [
        'Subarray Problems',
        'String Problems',
        'Maximum/Minimum Window',
        'Palindrome Problems',
        'Dutch National Flag'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Sliding Window and Two Pointer Examples',
    examples: [
      {
        title: 'Maximum Sum Subarray of Size K',
        code:
`int maxSumSubarray(int arr[], int n, int k) {
    int maxSum = 0, windowSum = 0;

    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = std::max(maxSum, windowSum);
    }
    return maxSum;
}`
      },
      {
        title: 'Two Pointer Technique for Pair with Given Sum',
        code:
`bool hasPairWithSum(int arr[], int n, int sum) {
    int left = 0, right = n - 1;

    while (left < right) {
        int currentSum = arr[left] + arr[right];
        if (currentSum == sum) {
            return true;
        } else if (currentSum < sum) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Incorrect Window Size Management',
        solution: 'Ensure that the window size is correctly adjusted based on the problem requirements.'
      },
      {
        issue: 'Not Handling Edge Cases',
        solution: 'Consider edge cases such as empty arrays or arrays with a single element.'
      },
      {
        issue: 'Misunderstanding Pointer Movement',
        solution: 'Be clear on how and when to move the pointers to avoid infinite loops or missed elements.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the sliding window technique?',
        a: 'The sliding window technique is a method for solving problems that involve contiguous sequences by maintaining a subset of elements in a window that can expand or contract.'
      },
      {
        q: 'How does the two pointer technique work?',
        a: 'The two pointer technique uses two pointers to traverse a data structure, often from opposite ends, to find pairs or subarrays that meet certain criteria.'
      },
      {
        q: 'Can you give an example of a problem that can be solved using the sliding window technique?',
        a: 'An example is finding the maximum sum of a subarray of size K in an array.'
      },
      {
        q: 'What are the advantages of using these techniques?',
        a: 'These techniques can significantly reduce the time complexity of problems that would otherwise require nested loops, making them more efficient.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Sliding Window/2 Pointer Playlist',
      url: 'https://youtu.be/9kdHxplyl5I?si=1dmBH2zAy4t7TLiG',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Sliding Window',
      url: 'https://leetcode.com/tag/sliding-window/',
      icon: Code2
    },
    {
      type: 'practice',
      title: 'Practice Two Pointers',
      url: 'https://leetcode.com/problem-list/two-pointers/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Sliding Window/2 Pointer Technique',
      url: 'https://leetcode.com/discuss/general-discussion/1656171/difference-between-sliding-window-and-two-pointers-technique',
      icon: FileText
    }
  ]
};

export default SlidingWindow; 