// input: [425, 635, 897, 645];
// output: [245,356,789,456];

function sortElement(){
    const arr=[425, 635, 897, 645];
    const result=arr.map((item, index)=> {
        const arrStr=item.toString();
        const sortData=arrStr.split('').sort().join('');
        return parseInt(sortData);
    })
    return result;
}

console.log(sortElement());