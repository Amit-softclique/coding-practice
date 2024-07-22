// Occuerence of each word in a sentence.

function occuerenceWord(text) {
    let arrayString = text.replace(/[^a-zA-Z ]/g,"")
    .toLowerCase()
    .split(" ");
    
    const result = arrayString.reduce((hash, word)=> {
        hash[word]=hash[word] || 0;
        hash[word]++;
        return hash;
    }, {});
    return result;
}

console.log(occuerenceWord("This is see for test to check to see, the chek;"));