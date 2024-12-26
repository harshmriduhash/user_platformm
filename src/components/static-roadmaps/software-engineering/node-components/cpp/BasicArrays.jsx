import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const BasicArrays = {
  title: 'Basic Arrays',
  description: 'Master array operations and manipulations in C++',
  
  conceptOverview: {
    introduction: 'Arrays are fundamental data structures that store elements of the same type in contiguous memory locations. Understanding arrays is crucial for managing collections of data and implementing more complex data structures.',
    keyTakeaways: [
      'Array declaration and initialization',
      'Array traversal and manipulation',
      'Multi-dimensional arrays',
      'Array bounds and memory',
      'Common array operations'
    ]
  },

  roadmapFit: {
    description: 'Arrays form the foundation for more complex data structures and algorithms:',
    connections: [
      'STL Vectors - Dynamic array implementations',
      'Strings - Character arrays and string operations',
      'Sorting Algorithms - Array-based sorting',
      'Searching Algorithms - Array-based searching',
      'Matrix Operations - 2D array applications'
    ]
  },

  sections: [
    {
      title: 'Core Array Concepts',
      items: [
        'Array Declaration and Initialization',
        'Array Indexing and Traversal',
        'Array Modification Operations',
        'Multi-dimensional Arrays',
        'Array with Functions',
        'Common Array Problems'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Array Examples',
    examples: [
      {
        title: 'Array Basics',
        code:
`// Array declaration and initialization
int arr[5] = {1, 2, 3, 4, 5};  // Fixed-size array
int size = sizeof(arr) / sizeof(arr[0]);  // Calculate array size

// Array traversal
for(int i = 0; i < size; i++) {
    cout << arr[i] << " ";
}

// Using range-based for loop
for(int element : arr) {
    cout << element << " ";
}`
      },
      {
        title: '2D Arrays',
        code:
`// 2D array declaration
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Traversing 2D array
for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}`
      },
      {
        title: 'Array Operations',
        code:
`// Finding maximum element
int findMax(int arr[], int size) {
    int max = arr[0];
    for(int i = 1; i < size; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Array reversal
void reverseArray(int arr[], int size) {
    int start = 0, end = size - 1;
    while(start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}`
      },
      {
        title: 'Array with Functions',
        code:
`// Passing array to function
void modifyArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        arr[i] *= 2;  // Multiply each element by 2
    }
}

// Function returning array (using dynamic allocation)
int* createArray(int size) {
    int* arr = new int[size];
    for(int i = 0; i < size; i++) {
        arr[i] = i + 1;
    }
    return arr;
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Array Bounds',
        solution: 'Always check array indices to prevent buffer overflow. Arrays are 0-indexed in C++.'
      },
      {
        issue: 'Size Declaration',
        solution: 'Array size must be a constant expression in static allocation. Use dynamic allocation for variable size.'
      },
      {
        issue: 'Memory Management',
        solution: 'Remember to delete dynamically allocated arrays using delete[] to prevent memory leaks.'
      },
      {
        issue: 'Array Decay',
        solution: 'Arrays decay to pointers when passed to functions. Size information is lost, so pass size separately.'
      },
      {
        issue: 'Uninitialized Elements',
        solution: 'Initialize all array elements to avoid undefined behavior. Static arrays are zero-initialized by default.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the difference between arrays and vectors?',
        a: 'Arrays have fixed size and contiguous memory, while vectors are dynamic and can grow. Vectors provide additional functionality like automatic resizing and built-in methods.'
      },
      {
        q: 'How do you pass an array to a function?',
        a: 'Arrays can be passed as pointers or references. Size must be passed separately as arrays decay to pointers when passed to functions.'
      },
      {
        q: 'Explain row-major vs column-major order.',
        a: 'Row-major (C++) stores elements row by row, while column-major stores column by column. Affects memory access patterns and cache performance in 2D arrays.'
      },
      {
        q: 'How do you find the size of an array?',
        a: 'Use sizeof(arr)/sizeof(arr[0]) for static arrays. For dynamic arrays, size must be tracked separately as this won\'t work.'
      },
      {
        q: 'What happens if you access an array out of bounds?',
        a: 'Accessing array out of bounds leads to undefined behavior. Could corrupt memory, crash program, or produce unexpected results. Always validate indices.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Arrays in C++',
      url: 'https://youtu.be/37E9ckMDdTk?si=Mpz95E9GRsH7NfW2',
      icon: Youtube
    },
    {
      type: 'practice',
      title: 'Find Largest Element in an Array',
      url: 'https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0',
      icon: Code2,
      note: '* Classic beginner question'
    },
    {
      type: 'practice',
      title: 'Find Second Largest Element',
      url: 'https://www.geeksforgeeks.org/problems/second-largest3735/1',
      icon: Code2,
      note: '* Twisted logic'
    },
    {
      type: 'practice',
      title: 'Linear Search',
      url: 'https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1',
      icon: Code2,
      note: '* Classic Linear Search'
    },
    {
      type: 'tutorial',
      title: 'Array Guide',
      url: 'https://www.geeksforgeeks.org/array-data-structure/',
      icon: BookOpen
    }
  ]
};

export default BasicArrays; 