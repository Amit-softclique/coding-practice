function isPalindrome(str1) {
    const str=str1.toLowerCase();
    const len=str.length
    
    console.log(str.toLowerCase().length)

    for(i=0; i<len/2; i++){
        if(str[i] !== str[len-1-i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('Hello'))

