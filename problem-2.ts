// Sample Input:

// removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
//     // Sample Output:
//     (1, 2, 3, 4, 5)
//   ];

const removeDuplicates = (arr2: number[]): number[] => {
    const newArr: number[] = Array.from(new Set(arr2));
    return newArr;
}

// console.log(removeDuplicates([1, 7, 2, 2, 3, 4, 4, 5, 12]))