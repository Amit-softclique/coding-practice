// input: [2,4,5,[6,7,[9,10]]];
// output: [2,4,5,6,7,9,10]

const arr1 = [2,4,5,[6,7,[9,10]]];

function flatArray(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatArray(arr[i]))
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatArray(arr1));

const arr2= [
    {name: 'Amit', address: 'Howrah-1', pin: 711444},
    {name: 'Ramit', address: 'Howrah-2', pin: 711355},
    {name: 'Samit', address: 'Howrah-3', pin: 711399}
]

function arrToObj(arr) {
    let result = {};
    for(let i=0; i<arr.length; i++) {
        result[arr[i].name] = {
            address: arr[i].address,
            pincode: arr[i].pin
        }
    }
    return result;
}

console.log(arrToObj(arr2));
