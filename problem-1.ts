// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;

const sumArray = (arr: number[]): number => {
    const sum = arr.reduce((prev, cur)=> prev + cur, 0);
    return sum;
}

sumArray([1, 5, 3, 4, 5])