// Occuerence of each word in a sentence.

function occuerenceWord(text) {
    let arrayString = text.replace(/[^a-zA-Z ]/g,"")
    .toLowerCase()
    .split(" ");
    
    // let charMap = new Map();
    
    // for (let i=0; i < arrayString.length; i++) {
    //     if(charMap.has(arrayString[i])) {
    //         charMap.set(arrayString[i], charMap.get(arrayString[i]) + 1);
    //     } else {
    //         charMap.set(arrayString[i], 1);
    //     }
    // }
    // return charMap;

    const result = arrayString.reduce((hash, word)=> {
        hash[word]=hash[word] || 0;
        hash[word]++;
        return hash;
    }, {});
    return result;
}

console.log(occuerenceWord("This is see for test to check to see, the chek;"));