const array1 = [3, 5, 2, -4, 8, 11, 13, 7];

// hash map solution
function threeSum(arr, target) {
    const result = [];
    const hash = {};
    for (let i=0; i<arr.length; i++) {
        for ( let j=i+1; j<arr.length; j++) {
            const complement = target - (arr[i] + arr[j]);
            if (complement in hash) {
                result.push([arr[i], arr[j], complement]);
            } else {
                hash[arr[j]] = true;
            }
        }
    }
    return result;
}

const result = threeSum(array1, 13);
console.log(result);