// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num){
    if(num <=15 ){
        return "You can't drive.";
    }
    if(num <= 17){
        return "You can drive but not vote.";
    }
    if(num <=24){
        return "You can vote but not rent a car.";
    }else if (num >= 25){
        return "You can do pretty much anything.";
    }
    return num;
}
// ==============================
function oddIndices(array){
    var oddInd = [];
    for(i=0;i < array.length; i++)
    if(i % 2 ===1){
        oddInd.push(array[i]);
    }
    return oddInd;
}
// ================================
function numOddValues(array){
    var oddCount= 0;
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            oddCount +=1;
        }
    }
    return oddCount;
}
// ================================
function averageStringLength(str){
    var avg = 0;
    if(str.length !== 0){
        for(const word of str){
            for(const letter of word){
                avg ++;
            }
                        
        }avg = avg / str.length;
    }
    return avg;
}
// =============================
function firstPunctuationIndex(str){
    var index = 0;
    var none = false;
    for(const char of str){
        if(char ==="." || char === '!' || char === "?"){
            index = str.indexOf(char);
            none = true;
            break;
        }
    }
    if(none === false){
        index= -1;
    }
    return index;
}
// ==============================
function getPlace(highScores,newScore){
    for(score of highScores){
        rank = (highScores.indexOf(score)+1).toString();
        lastPlace = highScores.length;
        if(newScore >= score){
            if(rank.endsWith("1")){
                return `${rank}st place`;
            }
            if(rank.endsWith("2")){
                return `${rank}nd place`;
            }
            if(rank.endsWith("3")){
                return `${rank}rd place`;
            }else{
                return `${rank}th place`;
            }
        }else{
            highScores.push(newScore)
        }
    }
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
