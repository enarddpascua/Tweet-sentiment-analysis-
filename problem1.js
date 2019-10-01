

// const fs = require('fs');
// const tweets = require('fs');
  
// fs.readFile('scores.txt', "utf8",(err, data) => { 
//     if (err) throw err; 

// tweets.readFile('1000.txt', "utf8", (error, data1) =>{
//     if (error) throw error


// var getData = data.toString();
// var removeTab = getData.split("\t").toString();
// var removeN = removeTab.split("\n")
// var getData1 = data1.toString().toLocaleLowerCase();
// var getTweet = getData1.match(/(?<=,)"text":[A-Za-z0-9\s*\W*]*(?="source")/g);


// const removeComma = removeN.map(function(test){
//     return test
// });
// const getScoredWords = removeComma.map(function(words){
//     return words.split(",")[0]
// });
// const getScores = removeComma.map(function(score){
//     return Number(score.split(",")[1]); 
// });

// const disectToWords = getTweet.map(function(perwords){
//     return perwords.split(/\W*\s+/);
// })

// // let compare = (getScoredWords, disectToWords) => [...new Set( getScoredWords.filter(el => disectToWords.includes(el)))]
// // console.log(compare)

// function compare(getScoredWords, disectToWords){
//     const matchedWords = [];
    
// getScoredWords.forEach((el1) => disectToWords.forEach((el2) => {
//     if (el1 === el2){
//     matchedWords.push(el1)
//     return matchedWords;
// }
//     else if(getScoredWords.length !== disectToWords.length){
//     return false
// } 
// }))
// }


// var result = disectToWords.filter(words => getScoredWords.includes(words));

// });
// });

//JSONed




// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
// var docx = sentiment.analyze("I haven't finished my essay and Ryan's set up the PS3... Oh no...");
// console.log(docx)
var stemmer = require('stemmer')
var fs = require('fs');
const tweets = require('fs');
tweets.readFile('1000.txt', "utf8", (error, data1) =>{
    if (error) throw error;

fs.readFile('scores.txt', (err, data) => {
        if (err) throw err;

var getData = data.toString();
var removeTab = getData.split("\t").toString();
var removeN = removeTab.split("\n");
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
     console.log(i,getTweet[i], finalCut[x] +" "+ scores, sum +" "+ "Stemmed:" + finalCut[x] )
        }
     }
}
}
})
})