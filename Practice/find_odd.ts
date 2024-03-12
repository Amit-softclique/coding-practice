// Find the missing odd number from an array.

const arr1 = [5,7,9,11,15,19,21];

function missingNumber(arr1) {
    const gap = 2;
    for (let i=0; i< arr1.length; i++) {
        let next = arr1[i] + gap;
        if (arr1[i] !== next) {
            console.log(next);
            break;
        }
    }
}

const result = missingNumber(arr1);
console.log('final', result);