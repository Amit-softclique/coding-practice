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

************ Optimize using Reduce method *****************
    
    function countVowel(sentence){
    const vowels = ['a', 'e', 'i','o', 'u'];
    const newSentence = sentence.toLowerCase().split('');
    const result = newSentence.reduce((hash, word)=> {
        if(vowels.includes(word)){
            hash[word] = (hash[word] || 0) + 1;
        }
        return hash
    }, {})
    return result;
}
console.log('count', countVowel('I love my india very much.'))
