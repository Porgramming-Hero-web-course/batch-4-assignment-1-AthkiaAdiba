

const removeDuplicates = (arr2: number[]): number[] => {
    const newArr: number[] = [];

    arr2.forEach(num => {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    });

    return newArr;
}
