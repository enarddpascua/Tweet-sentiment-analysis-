
var fs = require('fs');
const tweets = require('fs');
tweets.readFile('1000.txt', "utf8", (error, data1) =>{
    if (error) throw error;

let getData1 = data1.toString();
let getDataLines = getData1.split("\n");

let tweetContainer = [];

for (i = 0; i<getDataLines.length; i++){
    let searchForEn = getDataLines[i].search('"lang":"en"')
    if( searchForEn > 0){
        tweetContainer.push(getDataLines[i])
    }
}

let tweetConvert = tweetContainer.toString();
var getTweet = tweetConvert.match(/(?<=,"text":")[A-Za-z0-9\s*\W*]*(?="source")/g);

const disectToWords = getTweet.map(perword =>{
     return perword.split(/\W*\s+/);
})

function getOccurrence(array, value){
    return array.filter((v) => (v === value)).length;
}

function compareNum (a, b){
    return b[1] - a[1];
}

let getHashes = disectToWords.toString().match(/#+[A-Za-z0-9]+/g);


let mergedHash = [...new Set(getHashes)]
let sortHashWords = [];

for (let j = 0; j <mergedHash.length; j++){
    
    if(mergedHash[j]){
        let hashTagFreq = getOccurrence(getHashes, mergedHash[j])
        sortHashWords.push([[mergedHash[j]],[hashTagFreq]])
        
    }
}
console.log(sortHashWords)
let sorted = sortHashWords.sort(compareNum);
//console.log(sorted.slice(0, 10))
})