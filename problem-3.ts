

const countWordOccurrences = (sentence: string, word: string) => {
    const stringArr = sentence.toLowerCase().split(' ');
    const convertedWord = word.toLowerCase();

    let count = 0;
    
    for (const w of stringArr) {
        if (w === convertedWord) {
            count++;
        }
    }

    return count;

}