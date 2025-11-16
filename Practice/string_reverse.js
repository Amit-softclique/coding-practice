********** Short code *********
    function revString(str) {
    let reverse = '';
    for(let i=str.length -1; i>=0; i--){
        reverse = reverse + str[i]
    }
    return reverse
}

console.log(revString())
//output:: "liarknaS yoR timA"

*************************************************
var str='I love my country.';

function reverseString(str1) {
    let result = str1.split('').reverse().join('');
    return result;
}

const res = reverseString(str);
console.log(res);

***************** Rev string based on word *********************

function revString() {
    const fullName = 'Amit Roy Sankrail';
    let result = "";
    let word = "";
    
    for (let i=0; i<= fullName.length; i++) {
        const char = fullName[i] || " ";
        if (char !== " ") {
            word += char;
        } else {
        for(let j= word.length-1; j >=0; j--) {
            // console.log(word[j]);
            result += word[j];
            }
            
            result += " ";
            word = "";
        }
    }
    return result;
}


