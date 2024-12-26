import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const GreedyAlgorithms = {
  title: 'Greedy Algorithms',
  description: 'Master greedy algorithmic techniques and problem-solving',
  
  conceptOverview: {
    introduction: 'Greedy algorithms are a class of algorithms that make locally optimal choices at each stage with the hope of finding a global optimum. They are used in optimization problems and are often simpler and faster than other approaches.',
    keyTakeaways: [
      'Understanding the greedy approach and its principles',
      'Identifying problems suitable for greedy algorithms',
      'Analyzing the correctness of greedy solutions',
      'Time complexity analysis of greedy algorithms',
      'Common applications in real-world scenarios'
    ]
  },

  roadmapFit: {
    description: 'Greedy algorithms are essential for solving optimization problems and are foundational for understanding more complex algorithms.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Dynamic Programming',
      'Used in: Graph Algorithms',
      'Applied in: Scheduling and Resource Allocation'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Greedy Approach',
        'Optimal Substructure',
        'Local vs Global Optima',
        'Proof of Correctness',
        'Time Complexity Analysis'
      ]
    },
    {
      title: 'Common Problems',
      items: [
        'Activity Selection',
        'Fractional Knapsack',
        'Huffman Coding',
        'Job Sequencing',
        'Minimum Coins'
      ]
    },
    {
      title: 'Advanced Applications',
      items: [
        'Minimum Spanning Trees',
        "Dijkstra's Algorithm",
        'Interval Scheduling',
        'Task Assignment',
        'Set Cover Problem'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Greedy Algorithm Examples',
    examples: [
      {
        title: 'Activity Selection Problem',
        code:
`// Function to find the maximum number of activities that can be performed
#include <vector>
#include <algorithm>

struct Activity {
    int start;
    int finish;
};

bool compare(Activity a1, Activity a2) {
    return a1.finish < a2.finish;
}

int maxActivities(Activity arr[], int n) {
    std::sort(arr, arr + n, compare);
    int count = 1;
    int lastFinish = arr[0].finish;

    for (int i = 1; i < n; i++) {
        if (arr[i].start >= lastFinish) {
            count++;
            lastFinish = arr[i].finish;
        }
    }
    return count;
}`
      },
      {
        title: 'Fractional Knapsack Problem',
        code:
`// Function to get the maximum value in the knapsack
#include <vector>
#include <algorithm>

struct Item {
    int value;
    int weight;
};

bool compare(Item a, Item b) {
    return (double)a.value / a.weight > (double)b.value / b.weight;
}

double fractionalKnapsack(Item arr[], int W, int n) {
    std::sort(arr, arr + n, compare);
    double totalValue = 0.0;

    for (int i = 0; i < n; i++) {
        if (arr[i].weight <= W) {
            W -= arr[i].weight;
            totalValue += arr[i].value;
        } else {
            totalValue += arr[i].value * ((double)W / arr[i].weight);
            break;
        }
    }
    return totalValue;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Assuming Greedy Choice is Optimal',
        solution: 'Always verify that the greedy choice leads to an optimal solution for the specific problem.'
      },
      {
        issue: 'Ignoring Edge Cases',
        solution: 'Consider edge cases that may not fit the general pattern of the problem.'
      },
      {
        issue: 'Incorrectly Analyzing Time Complexity',
        solution: 'Ensure that the time complexity of the greedy algorithm is correctly analyzed, especially in terms of sorting and iterations.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a greedy algorithm?',
        a: 'A greedy algorithm is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit.'
      },
      {
        q: 'Can you give an example of a problem that can be solved using a greedy algorithm?',
        a: 'Examples include the Activity Selection Problem, Fractional Knapsack Problem, and Huffman Coding.'
      },
      {
        q: 'What are the advantages of using greedy algorithms?',
        a: 'Greedy algorithms are often simpler and faster than other approaches, and they can provide good solutions for many optimization problems.'
      },
      {
        q: 'What are the limitations of greedy algorithms?',
        a: 'Greedy algorithms do not always yield the optimal solution for all problems, and they may require proof of correctness for specific cases.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Greedy A;gorithms Playlist',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0rF1w2Koyh78zafB0cz7tea&si=BWTraOUSlKFJis0Z',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Practice Greedy Algorithms',
      url: 'https://leetcode.com/tag/greedy/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Greedy Algorithms Guide',
      url: 'https://www.geeksforgeeks.org/greedy-algorithms/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Greedy Methods Tutorial',
      url: 'https://www.programiz.com/dsa/greedy-algorithm',
      icon: BookOpen
    }
  ]
};

export default GreedyAlgorithms; 