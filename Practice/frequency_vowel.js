// I/p: 'I love my india very much.'
// o/p: {i: 3, o: 1, e: 2, a: 1, u: 1}

function countVowel(sentence) {
    let vowels=['a', 'e', 'i', 'o', 'u'];
    let vowelFrequency={};
    let newSentence = sentence.toLowerCase();

    for (char of newSentence) {
        if (vowels.includes(char)) {
            vowelFrequency[char] = (vowelFrequency[char] || 0) + 1;
        }
    }
    return vowelFrequency;
}

console.log(countVowel('I love my india very much.'));