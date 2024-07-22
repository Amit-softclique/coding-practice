//You can find the second most frequent element in an array along with its count.
// const arr = [1, 2, 3, 2, 2, 3, 4, 4, 4, 4];
// output = { element: 2, count: 3 };

// Step 1: Create an object to store the frequency of each element.
// Step 2: Convert the object into an array of [element, frequency] pairs.
// Step 3: Sort the array by frequency in descending order.
// Step 4: The second most frequent element will be at index 1.

function secondMostFrequent(arr) {
    const frequency = {}
    arr.forEach(num=>{
        frequency[num] = (frequency[num] || 0) + 1;
    });

    const frequencyArr=Object.entries(frequency);
    frequencyArr.sort((a,b)=> b[1] - a[1]);

    const secondMostFreqElement = frequencyArr[1][0];
    const secondMostFreqCount = frequencyArr[1][1]

    return { element: secondMostFreqElement, count: secondMostFreqCount };
}

const arr = [1, 2, 3, 2, 2, 3, 4, 2, 4, 4];
console.log(secondMostFrequent(arr))