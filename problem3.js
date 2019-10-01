
var fs = require('fs');
const tweets = require('fs');
tweets.readFile('1000.txt', "utf8", (error, data1) =>{
    if (error) throw error;


fs.readFile('scores.txt', (err, data) => {
        if (err) throw err;

var getData = data.toString();
var removeTab = getData.split("\t").toString();
var removeN = removeTab.split("\n");
var getData1 = data1.toString();
let getDataLines = getData1.split("\n");

let tweetContainer = [];

for (i = 0; i<getDataLines.length; i++){
    let searchForEn = getDataLines[i].search('"lang":"en"')
    if( searchForEn > 0){
        tweetContainer.push(getDataLines[i])
    }
}

let tweetConvert = tweetContainer.toString();
var getTweet = tweetConvert.match(/(?<=,"text":")[A-Za-z0-9\s\W]*(?="source")/g);

const disectToWords = getTweet.map(perword =>{
     return perword.split(/\W*\s+/);
})
// another function to merge repeated values in array
// const distinct = (value, index, self) => {
//     return self.indexOf(value) === index;
// }
 //called here
//let mergedWords = scoredWords.filter(distinct)

//to check the number of repeated values in array
function getOccurrence(array, value){
    return array.filter((v) => (v === value)).length;
}


var matchedWords = [];
var scoredWords = [];

for(var i = 0; i <disectToWords.length; i++){
    var sum = 0;
    let getTweetWords = disectToWords[i];
    var cut1 = getTweetWords.toString().split(" ").toString();
    var cut2 = cut1.split(",").toString();
    var cut3 = cut2.split("\n").toString();
    var finalCut = cut3.match(/\s*[A-Z]*[a-z]*[0-9]*/g)
    
    for(x = 0; x < finalCut.length; x++){
    for(j = 0; j<removeN.length; j++){
        var words = removeN[j].split(",")[0];
        var scores = Number(removeN[j].split(",")[1]);
    if (finalCut[x].toLowerCase() === words){
        sum = sum + scores;
        matchedWords.push(words);
        scoredWords.push(words)
        }
    } 
}
}
const totalOccurences = Number(matchedWords.length);
 let mergedWords = [...new Set(scoredWords)]

     for( var y = 0; y < mergedWords.length; y++){
         if(mergedWords[y]){
            var result = Number(getOccurrence(matchedWords, mergedWords[y]))
         } 
         //console.log([mergedWords[y]], [result/totalOccurences])
    }
    
})
})