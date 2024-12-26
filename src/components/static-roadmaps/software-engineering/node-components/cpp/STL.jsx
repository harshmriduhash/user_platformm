import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const STL = {
  title: 'Standard Template Library (STL)',
  description: 'Master the essential C++ Standard Template Library components and algorithms',
  
  conceptOverview: {
    introduction: 'The C++ Standard Template Library (STL) is a powerful set of template classes and functions that provide general-purpose classes and functions with templates that implement many popular and commonly used algorithms and data structures.',
    keyTakeaways: [
      'Container classes for data storage',
      'Iterator concepts and usage',
      'Algorithm library utilization',
      'Generic programming with templates',
      'STL container adaptors'
    ]
  },

  roadmapFit: {
    description: 'STL is crucial for efficient C++ programming and prepares you for advanced concepts:',
    connections: [
      'Data Structures - Built-in container implementations',
      'Algorithms - Ready-to-use algorithm library',
      'Advanced C++ - Template programming concepts',
      'Competitive Programming - Efficient problem solving',
      'Modern C++ - Standard library features'
    ]
  },

  sections: [
    {
      title: 'Core STL Components',
      items: [
        'Containers (vector, list, set, map)',
        'Iterators and their types',
        'Algorithms (sort, search, etc.)',
        'Container Adaptors (stack, queue)',
        'Utility Components'
      ]
    }
  ],

  syntaxGuide: {
    title: 'STL Examples',
    examples: [
      {
        title: 'Vector Operations',
        code:
`// Vector basic operations
vector<int> vec = {1, 2, 3, 4, 5};
vec.push_back(6);           // Add element
vec.pop_back();            // Remove last element
vec.size();               // Get size
vec.empty();              // Check if empty

// Vector iteration
for(auto element : vec) {
    cout << element << " ";
}

// Vector algorithms
sort(vec.begin(), vec.end());                    // Sort
reverse(vec.begin(), vec.end());                 // Reverse
auto it = find(vec.begin(), vec.end(), 3);       // Find element`
      },
      {
        title: 'Set and Map Usage',
        code:
`// Set operations
set<int> s = {4, 1, 3, 2, 5};     // Automatically sorted
s.insert(6);                       // Insert element
s.erase(1);                        // Remove element
auto it = s.find(3);              // Find element

// Map operations
map<string, int> m;
m["one"] = 1;                     // Insert key-value
m["two"] = 2;
for(auto &pair : m) {
    cout << pair.first << ": " << pair.second << endl;
}`
      },
      {
        title: 'STL Algorithms',
        code:
`vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};

// Sorting
sort(v.begin(), v.end());                // Ascending
sort(v.rbegin(), v.rend());             // Descending

// Binary search
bool found = binary_search(v.begin(), v.end(), 4);

// Min/Max elements
auto min = *min_element(v.begin(), v.end());
auto max = *max_element(v.begin(), v.end());

// Count occurrences
int count = count(v.begin(), v.end(), 1);`
      },
      {
        title: 'Container Adaptors',
        code:
`// Stack operations
stack<int> st;
st.push(1);                    // Add element
st.push(2);
st.pop();                      // Remove top
int top = st.top();           // Access top

// Queue operations
queue<int> q;
q.push(1);                     // Enqueue
q.push(2);
q.pop();                       // Dequeue
int front = q.front();        // Access front`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Iterator Invalidation',
        solution: 'Be careful when modifying containers while iterating. Operations like insert/erase can invalidate iterators.'
      },
      {
        issue: 'Range Checking',
        solution: 'STL containers don\'t perform automatic bounds checking. Use at() instead of [] for safe access.'
      },
      {
        issue: 'Algorithm Prerequisites',
        solution: 'Some algorithms require sorted ranges. Ensure containers meet algorithm requirements.'
      },
      {
        issue: 'Memory Management',
        solution: 'STL containers manage memory automatically, but be careful with custom objects and pointers.'
      },
      {
        issue: 'Performance Considerations',
        solution: 'Choose appropriate containers based on operation requirements. Different containers have different complexity guarantees.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What are the different types of containers in STL?',
        a: 'STL has sequence containers (vector, list, deque), associative containers (set, map), and container adaptors (stack, queue, priority_queue).'
      },
      {
        q: 'Explain the difference between vector and list.',
        a: 'Vector provides random access and contiguous memory but costly insertions/deletions. List allows efficient insertions/deletions but no random access and uses more memory.'
      },
      {
        q: 'What are iterators and their types?',
        a: 'Iterators are objects that point to container elements. Types include input, output, forward, bidirectional, and random access iterators.'
      },
      {
        q: 'How does set differ from unordered_set?',
        a: 'Set maintains elements in sorted order using tree (O(log n) operations). Unordered_set uses hash table for O(1) average operations but elements are not ordered.'
      },
      {
        q: 'What is the difference between map and multimap?',
        a: 'Map allows only unique keys while multimap can have multiple elements with the same key. Both maintain elements in sorted order by key.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'STL Complete Tutorial',
      url: 'https://youtu.be/RRVYpIET_RU?si=x5dRi3T5oLeygVfn',
      icon: Youtube
    },
    {
      type: 'tutorial',
      title: 'STL Guide',
      url: 'https://www.geeksforgeeks.org/cpp-stl-tutorial/',
      icon: BookOpen
    }
  ]
};

export default STL; 