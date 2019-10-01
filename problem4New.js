
const fs = require("fs");


function getOccurrence(array, value){
    return array.filter((v) => (v === value)).length;
}

function compareNum (a, b){
    return b[1] - a[1];
}

var arr1 = [];
var hashtags = [];
let sortHashes = [];

fs.readFile('1000.txt', (err, data1) => {
    if (err) throw err;
    arr1.push(data1);
    let getData1 = arr1.toString();
    let getDataLines = getData1.split("\n");
    for(var i = 0; i< getDataLines.length-1; i++){
       const forHash = JSON.parse(getDataLines[i]);
       const entities = forHash.entities
       if(entities){
       const getHash = entities.hashtags;
       for(var j = 0; j<getHash.length; j++){
           hashtags = [...hashtags, getHash[j].text]
       }
    }   
}
let mergedHash = [...new Set(hashtags)]

for (let result of mergedHash){
    const occur = getOccurrence(hashtags, result)
   
    sortHashes.push([[result], [occur]])
   
}
let sorted = sortHashes.sort(compareNum);
console.log(sorted.slice(0,10))
})