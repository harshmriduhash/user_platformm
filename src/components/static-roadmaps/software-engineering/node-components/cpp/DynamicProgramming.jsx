import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const DynamicProgramming = {
  title: 'Dynamic Programming',
  description: 'Master the art of solving complex problems using Dynamic Programming',
  
  conceptOverview: {
    introduction: 'Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems are overlapping, meaning that the same subproblems are solved multiple times. DP is used to optimize recursive algorithms by storing the results of subproblems to avoid redundant calculations.',
    keyTakeaways: [
      'Understanding the principles of dynamic programming',
      'Identifying problems suitable for DP',
      'Utilizing memoization and tabulation techniques',
      'Analyzing time and space complexity of DP solutions',
      'Common applications in algorithm design and optimization'
    ]
  },

  roadmapFit: {
    description: 'Dynamic Programming is essential for solving optimization problems and is foundational for understanding more complex algorithms, such as those used in graph theory and combinatorial problems.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Advanced Algorithm Techniques',
      'Used in: Graph Algorithms',
      'Applied in: Scheduling and Resource Allocation'
    ]
  },

  sections: [
    {
      title: 'Basic Concepts',
      items: [
        'Memoization: Storing results of expensive function calls and reusing them when the same inputs occur again.',
        'Tabulation: Building a table in a bottom-up manner to solve problems iteratively.',
        'State and Transition: Defining the state of the problem and how to transition between states.',
        'Optimal Substructure: A property that a problem exhibits if an optimal solution can be constructed from optimal solutions of its subproblems.',
        'Overlapping Subproblems: A property that occurs when the same subproblems are solved multiple times in a recursive algorithm.'
      ]
    },
    {
      title: 'Common Patterns',
      items: [
        '0/1 Knapsack Problem: Choosing items with given weights and values to maximize value without exceeding weight capacity.',
        'Unbounded Knapsack: Similar to the 0/1 knapsack but allows unlimited quantities of each item.',
        'Longest Common Subsequence: Finding the longest subsequence present in two sequences.',
        'Matrix Chain Multiplication: Determining the most efficient way to multiply a given sequence of matrices.',
        'Coin Change Problems: Finding the number of ways to make change for a given amount using specified denominations.'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'DP on Trees: Applying dynamic programming techniques to tree structures for problems like subtree sums.',
        'DP with Bitmasks: Using bitmasks to represent subsets and solve problems involving combinations efficiently.',
        'Digit DP: A technique for solving problems related to digits of numbers, often used in combinatorial counting.',
        'Probability DP: Applying dynamic programming to problems involving probabilities and expected values.',
        'DP with Game Theory: Solving problems that involve strategic decision-making using dynamic programming.'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Dynamic Programming Examples',
    examples: [
      {
        title: 'Fibonacci Sequence using Memoization',
        code:
`int fib(int n, vector<int>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

int fibonacci(int n) {
    vector<int> memo(n + 1, -1);
    return fib(n, memo);
}`
      },
      {
        title: '0/1 Knapsack Problem using Tabulation',
        code:
`int knapsack(int W, vector<int>& weights, vector<int>& values, int n) {
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Not Identifying Overlapping Subproblems',
        solution: 'Ensure that the problem exhibits overlapping subproblems to apply dynamic programming effectively.'
      },
      {
        issue: 'Incorrect State Definition',
        solution: 'Clearly define the state and transitions to avoid logical errors in the DP solution.'
      },
      {
        issue: 'Ignoring Base Cases',
        solution: 'Always consider and implement base cases to prevent incorrect results or infinite recursion.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is dynamic programming?',
        a: 'Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.'
      },
      {
        q: 'What is the difference between memoization and tabulation?',
        a: 'Memoization is a top-down approach that stores results of expensive function calls, while tabulation is a bottom-up approach that builds a table iteratively.'
      },
      {
        q: 'Can you give an example of a problem that can be solved using dynamic programming?',
        a: 'An example is the 0/1 Knapsack problem, where you need to maximize the value of items placed in a knapsack without exceeding its weight capacity.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Dynamic Programming Masterclass',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&si=MiW8HjbB7d1X_9in',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Dynamic Programming Problems',
      url: 'https://leetcode.com/tag/dynamic-programming/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Dynamic Programming Guide',
      url: 'https://www.geeksforgeeks.org/dynamic-programming/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Dynamic Programming Patterns',
      url: 'https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns',
      icon: BookOpen
    }
  ]
};

export default DynamicProgramming; 