// Find sum of the number from the given string.
//I/p= "tdh1w4##23bg@5"

function sumString(){
    const str="tdh1w4##28bg@5"
    let sum=0
    for(let i=0; i<str.length; i++){
        if(parseInt(str[i])){
            sum=sum+parseInt(str[i])
        }
    }
        return sum;
    }
    
    console.log(sumString())