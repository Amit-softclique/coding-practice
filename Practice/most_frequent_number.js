//You can find the most most frequent element in an array along with its count.
// const arr = [1, 2, 3, 2, 4, 3, 4, 2, 4, 4];
// output = { element: 4, count: 4 };

function mostFrequent() {
    const arr = [1, 2, 4, 3, 2, 4, 3, 4, 2, 4, 4];
    const frequency = {};
    arr.forEach(num=> {
        frequency[num] = (frequency[num] || 0) + 1;
    })

    let maxFreqElement = null;
    let maxFreqCount = 0;

    for (const [element, count] of Object.entries(frequency)) {
        if (count > maxFreqCount) {
            maxFreqCount = count;
            maxFreqElement = +element;
        }
    }

    return { element: maxFreqElement, count: maxFreqCount }
}

*****************************************************************************
    Using Reduce method.

    function mostFrequent(arr) {
    const result = arr.reduce((hash, word)=> {
       hash[word] = (hash[word] || 0) + 1;
       return hash;
    },{})
    console.log('res=>', result, Object.keys(result))
    
    const element = Object.keys(result).reduce((a,b)=>
    result[a] > result[b] ? a : b
    );
    console.log('element=>', element)
    
    const output = {element: Number(element), count: result[element]}
    return output;
}

//output = { element: 4, count: 4 };

console.log(mostFrequent())
