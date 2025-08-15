function totalFine( fare ) {
        if(typeof fare !== 'number' || fare <= 0){
            return "Invalid";
        }
        
        let totalFine = fare + fare * (20 / 100) + 30;
        return totalFine;
}

function  onlyCharacter( str ) {

    if(typeof str !== 'string' || str == true || str == []){
        return "Invalid";
    }

    let text = str;
    let result = text.toUpperCase().replace(/\s+/g, '');
    return result;
}

function  bestTeam( player1, player2 ) {

    if(typeof player1 !== 'object' || typeof player2 !== 'object'){
        return "Invalid";
    }

    let score = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if(score < score2){
        return player1.name;
    }
    else if(score2 < score){
        return player2.name;
    }
    else{
        return "Tie";
    }
}

function  isSame(arr1 , arr2 ) {
    
    if(!Array.isArray(arr1) || !Array.isArray(arr2) ){
        return "Invalid";
    }

    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

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