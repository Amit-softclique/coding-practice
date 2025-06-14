1
2 3
4 5 6
7 8 9 10
function numberPrint() {
    let count=1;
    let row=4;
    for(let i=1; i<=row; i++){
        let line =''
        for(j=1; j<= i; j++){
            line += count + ' ';
                 count++
        }
        console.log(line.trim());
    }
}
numberPrint();
******************************************
1
3 5
7 9 11
13 15 17 19
function numberPrint() {
    let count=1;
    let row=4;
    for(let i=1; i<=row; i++){
        let line =''
        for(j=1; j<= i; j++){
            line += count + ' ';
            count+=2
        }
        console.log(line.trim());
    }
}
numberPrint();
