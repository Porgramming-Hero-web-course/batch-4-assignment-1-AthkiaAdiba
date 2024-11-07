
const sumArray = (arr: number[]): number => {
    const sum = arr.reduce((prev, cur)=> prev + cur, 0);
    return sum;
}
