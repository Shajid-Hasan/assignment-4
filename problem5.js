function  resultReport( marks ) {

    if(marks.length === 0){
        return { finalScore: 0 , pass: 0, fail: 0 };
    }
    else if(!Array.isArray(marks)){
        return "Invalid";
    }
    
    let pass = 0;
    let fail = 0;
    let sum = 0;

    for (let mark of marks) {
        sum = sum + mark;
        if (mark >= 50) {
            pass++;
        } 
        else {
            fail++;
        }
    }
    
    let finalScore = Math.round(sum / marks.length);

    return { finalScore, pass, fail };
}

let studentMark = resultReport([99, 87, 67, 12 ,87]);
console.log(studentMark);


