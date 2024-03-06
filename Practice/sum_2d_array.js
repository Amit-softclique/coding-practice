// input: [[2,4,6], [7,8,9], [14,12,18]];
// output: [23,24,33]

function sumArray(){
    const arr=[[2,4,6], [7,8,9], [14,12,18]];
    const result = arr.reduce((acc, row)=> {
        return row.map((item, index)=> acc[index] + item)
    });
    return result;
}

console.log(sumArray());