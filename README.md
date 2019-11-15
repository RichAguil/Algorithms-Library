# Algorithms Library

This is a library I created as a personal project, and as a convenience for myself and others. This library contains commonly used searching and sorting algorithms. This is a work in progress, and more algorithms will be added in the future.

## Example

Below you will find an example of how to bring in the module, and begin using it.

```javascript

var algorithms = require('algorithmsnpm');

var unsortedArray = [5,10,8,2,1,54,-34,17,0,-76];
var sortedArray = algorithms.bubbleSort(unsortedArray);
console.log(sortedArray)
//Will log [-76,-34,0,1,2,5,8,10,17,54]

```
## Sorting Algorithms

1. Bubble Sort - Steps through the array and swaps elements until the largest (or smallest) element "bubbles" to the top (the end of the array). This has an average of O(n<sup>2<sup>) time complexity.

```javascript
var algorithms = require('algorithmsnpm');

var unsortedArray = [5,10,8,2,1,54,-34,17,0,-76];
var sortedArray = algorithms.bubbleSort(unsortedArray);
```

2. Selection Sort - Breaks up the input array into two parts--an sorted sub-array (with initial size of zero), and an unsorted sub-array. Takes the smallest element and swaps it with the first element, increasing the size of the sorted sub-array by one, and the unsorted sub-array by 1, then proceeds, to find the smallest again, and swaps it with the second element, etc. This has an average of O(n<sup>2<sup>) time complexity.

```javascript
var algorithms = require('algorithmsnpm');

var unsortedArray = [5,10,8,2,1,54,-34,17,0,-76];
var sortedArray = algorithms.selectionSort(unsortedArray);
```

## Searching Algorithms

Will be added soon
