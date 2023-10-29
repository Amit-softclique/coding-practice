const array = [7,6,5,4,3,0,-1,-2,-3,-4]

function sumZero(array1) {
    let left = 0
    let right = array1.length -1
    while (left < right) {
        sum = array1[left] + array1[right];
        console.log(sum);
        if (sum === 0) {
            return [array1[left], array1[right]];
        } else if (sum > 0) {
            left++;
        } else {
            right--;
        }
    }
}
const result = sumZero(array)
console.log(result)