import { BookOpen, Code2, FileText, Youtube } from 'lucide-react';

const Sorting = {
  title: 'Sorting Algorithms',
  description: 'Learn and implement various sorting algorithms in C++',
  
  conceptOverview: {
    introduction: 'Sorting algorithms are fundamental techniques used to arrange data in a specific order. Understanding these algorithms is crucial for efficient data processing and optimization.',
    keyTakeaways: [
      'Understanding different sorting algorithms',
      'Time and space complexity analysis',
      'In-place vs out-of-place sorting',
      'Stable vs unstable sorting',
      'Applications of sorting algorithms'
    ]
  },

  roadmapFit: {
    description: 'Sorting algorithms are essential for data organization and preparation for advanced algorithms:',
    connections: [
      'Data Structures - Sorting is often used in conjunction with data structures',
      'Searching Algorithms - Many search algorithms require sorted data',
      'Algorithm Design - Understanding sorting helps in designing efficient algorithms',
      'Problem Solving - Sorting is a common requirement in competitive programming'
    ]
  },

  sections: [
    {
      title: 'Basic Sorting Algorithms',
      items: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Counting Sort',
        'Radix Sort'
      ]
    },
    {
      title: 'Advanced Sorting Algorithms',
      items: [
        'Merge Sort',
        'Quick Sort',
        'Heap Sort',
        'Shell Sort',
        'Tim Sort'
      ]
    },
    {
      title: 'Additional Resources',
      items: [
        'Sorting Algorithms Tutorial on Programiz',
        'https://www.programiz.com/dsa/sorting-algorithm'
      ]
    }
  ],

  syntaxGuide: {
    title: 'Sorting Algorithm Examples',
    examples: [
      {
        title: 'Bubble Sort',
        code:
`// Bubble Sort implementation
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`
      },
      {
        title: 'Selection Sort',
        code:
`// Selection Sort implementation
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIndex = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[minIndex], arr[i]);
    }
}`
      },
      {
        title: 'Insertion Sort',
        code:
`// Insertion Sort implementation
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`
      },
      {
        title: 'Merge Sort',
        code:
`// Merge Sort implementation
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int L[n1], R[n2];
    
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`
      },
      {
        title: 'Quick Sort',
        code:
`// Quick Sort implementation
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`
      }
    ]
  },

  commonPitfalls: {
    title: 'Common Pitfalls to Avoid',
    mistakes: [
      {
        issue: 'Inefficient Algorithms',
        solution: 'Choose the right sorting algorithm based on the data size and requirements. Avoid using inefficient algorithms for large datasets.'
      },
      {
        issue: 'Not Considering Edge Cases',
        solution: 'Always test sorting algorithms with edge cases like empty arrays, single-element arrays, and already sorted arrays.'
      },
      {
        issue: 'Ignoring Time Complexity',
        solution: 'Be aware of the time complexity of the sorting algorithm you choose, especially for large datasets.'
      },
      {
        issue: 'In-place vs Out-of-place',
        solution: 'Understand the difference between in-place and out-of-place sorting algorithms and choose accordingly based on memory constraints.'
      },
      {
        issue: 'Stability Issues',
        solution: 'If stability is required, ensure to use stable sorting algorithms or implement stability in your custom sorting logic.'
      }
    ]
  },

  interviewQuestions: {
    title: 'Frequently Asked Interview Questions',
    questions: [
      {
        q: 'What is the difference between stable and unstable sorting algorithms?',
        a: 'Stable sorting algorithms maintain the relative order of records with equal keys, while unstable sorting algorithms do not guarantee this order.'
      },
      {
        q: 'Explain the time complexity of Quick Sort.',
        a: 'Quick Sort has an average time complexity of O(n log n) but can degrade to O(n^2) in the worst case if the pivot is poorly chosen.'
      },
      {
        q: 'What is the best sorting algorithm for large datasets?',
        a: 'For large datasets, algorithms like Merge Sort or Heap Sort are often preferred due to their O(n log n) time complexity.'
      },
      {
        q: 'How does Merge Sort work?',
        a: 'Merge Sort divides the array into halves, recursively sorts them, and then merges the sorted halves back together.'
      },
      {
        q: 'What is the space complexity of Merge Sort?',
        a: 'Merge Sort has a space complexity of O(n) due to the temporary arrays used for merging.'
      }
    ]
  },

  resources: [
    {
      type: 'video',
      title: 'Basic Sorting Algorithms Tutorial',
      url: 'https://youtu.be/HGk_ypEuS24?si=LolzscCWgLoDD8EB',
      icon: Youtube
    },
    {
      type: 'video',
      title: 'Merge Sort Tutorial',
      url: 'https://youtu.be/ogjf7ORKfd8?si=a3LsnkGv_PEs71I7',
      icon: Youtube
    },
    {
      type: 'video',
      title: 'Quick Sort Tutorial',
      url: 'https://youtu.be/WIrA4YexLRQ?si=uxheaevH00gRfOjv',
      icon: Youtube
    },
    {
      type: 'tutorial',
      title: 'Hands On Practice',
      url: 'https://www.programiz.com/dsa/sorting-algorithm',
      icon: BookOpen
    }
  ]
};

export default Sorting; 