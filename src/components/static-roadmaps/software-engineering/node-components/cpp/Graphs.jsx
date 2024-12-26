import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Graphs = {
  title: 'Graphs',
  description: 'Master graph algorithms and their applications',
  
  conceptOverview: {
    introduction: 'Graphs are a collection of nodes (or vertices) connected by edges. They can represent various real-world problems, such as social networks, transportation systems, and more. Understanding graphs is crucial for solving complex problems in computer science.',
    keyTakeaways: [
      'Understanding graph terminology and properties',
      'Types of graphs (directed, undirected, weighted, unweighted)',
      'Graph representations (adjacency list, adjacency matrix)',
      'Common graph algorithms (DFS, BFS, Dijkstra’s, etc.)',
      'Applications of graphs in various domains'
    ]
  },

  roadmapFit: {
    description: 'Graphs are fundamental for understanding more complex data structures and algorithms, such as trees and networks.',
    connections: [
      'Prerequisite: Basic Data Structures',
      'Leads to: Advanced Graph Algorithms',
      'Used in: Network Flow Problems',
      'Applied in: Pathfinding Algorithms'
    ]
  },

  sections: [
    {
      title: 'Graph Basics',
      items: [
        'Graph Representation',
        'Graph Types',
        'Graph Traversal',
        'Connected Components',
        'Cycle Detection'
      ]
    },
    {
      title: 'Graph Algorithms',
      items: [
        "Dijkstra's Algorithm",
        'Bellman Ford',
        'Floyd Warshall',
        'Minimum Spanning Tree',
        'Topological Sort'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'Strongly Connected Components',
        'Network Flow',
        'Bipartite Matching',
        'Articulation Points',
        'Bridge Detection'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Graph Examples',
    examples: [
      {
        title: 'Graph Representation using Adjacency List',
        code:
`class Graph {
    private:
        unordered_map<int, vector<int>> adj;
    public:
        void addEdge(int u, int v) {
            adj[u].push_back(v);
            adj[v].push_back(u); // For undirected graph
        }
        
        void printGraph() {
            for (auto& pair : adj) {
                cout << pair.first << " -> ";
                for (int v : pair.second) {
                    cout << v << " ";
                }
                cout << endl;
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
        issue: 'Incorrect Graph Representation',
        solution: 'Ensure that the graph is represented correctly based on the problem requirements (directed vs undirected).'
      },
      {
        issue: 'Not Handling Edge Cases',
        solution: 'Consider edge cases such as disconnected graphs or graphs with no edges when implementing algorithms.'
      },
      {
        issue: 'Misunderstanding Graph Traversal',
        solution: 'Be clear on the differences between depth-first search (DFS) and breadth-first search (BFS) and their applications.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is a graph?',
        a: 'A graph is a collection of nodes (or vertices) connected by edges, which can represent various relationships between entities.'
      },
      {
        q: 'What are the different ways to represent a graph?',
        a: 'Graphs can be represented using an adjacency list, adjacency matrix, or edge list.'
      },
      {
        q: 'What is Dijkstra’s algorithm used for?',
        a: 'Dijkstra’s algorithm is used to find the shortest path from a source node to all other nodes in a weighted graph.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Graph Playlist',
      url: 'https://youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&si=WeqsFOevLGmoNMyL',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Graph Problems',
      url: 'https://leetcode.com/tag/graph/',
      icon: Code2
    },
    {
      type: 'documentation',
      title: 'Graph Theory',
      url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
      icon: FileText
    },
    {
      type: 'tutorial',
      title: 'Graph Algorithms Tutorial',
      url: 'https://www.programiz.com/dsa/graph',
      icon: BookOpen
    }
  ]
};

export default Graphs; 