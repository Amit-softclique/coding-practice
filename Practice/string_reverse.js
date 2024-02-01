var str='I love my country.';

function reverseString(str1) {
    let result = str1.split('').reverse().join('');
    return result;
}

const res = reverseString(str);
console.log(res);