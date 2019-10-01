var stemmer = require('stemmer')
const readline = require("readline");
const fs = require("fs");

let arr1 = [];
let arr2 = [];
let arr3 = [];


fs.readFile('scores.txt', (err, data) => {
    if (err) throw err;

    var getData = data.toString();
    var removeTab = getData.split("\t").toString();
    var removeN = removeTab.split("\n");

    for(let j = 0; j<removeN.length; j++){
        let words = stemmer(removeN[j].split(",")[0]);
        let scores = Number(removeN[j].split(",")[1]);
        arr1.push([words, scores])
        arr2.push(words)
    }

    var lookup = new Set([].concat.apply([], arr2));
    var mapping = arr1.filter(([word]) => lookup.has(word));

    var data = Object.entries(mapping.reduce((accum, curr) => {

    if(accum[curr[0]]){
        accum[curr[0]] = Math.max(curr[1], accum[curr[0]]);
    }else{
        accum[curr[0]] = curr[1];
    }
    return accum;
},{}));



readline.createInterface({
    input: fs.createReadStream("1000.txt")
  })
  
    .on("line", json => {
        const obj = JSON.parse(json);
        const getText = obj.text;

        let sum = 0;
        let count = 0;

        if(getText){
            const convertToLower = getText.toLowerCase();
            const getLetters = convertToLower.match(/[a-z]+/g);
            if(getLetters !== null){
                const stemmedTweets = getLetters.map(word => {
                    return stemmer(word)
                })
                for(let y = 0; y <stemmedTweets.length; y++){
                for(let x = 0; x <data.length; x++){
                    if(data[x] !== Number){
                        data[x].toString().split(",");
                        let words = data[x][0];
                        let scores = data[x][1];
                        if(stemmedTweets[y] === words){
                            count++
                            sum = sum + (scores);
                            let average = sum / count;
                            console.log(getText + "\n" + "score of specific word(s): "+ words+": "+scores +"  result = "+ stemmedTweets[y] + " " + sum + " /average : "+ average)
                        }
                    }
                }
                }
               }
            }   
})
})
