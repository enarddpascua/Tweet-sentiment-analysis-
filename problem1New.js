var stemmer = require('stemmer')
const readline = require("readline");
const fs = require("fs");

fs.readFile('scores.txt', (err, data) => {
    if (err) throw err;

    var getData = data.toString();
    var removeTab = getData.split("\t").toString();
    var removeN = removeTab.split("\n");

readline.createInterface({
    input: fs.createReadStream("1000.txt")
  })
  
    .on("line", json => {
        const obj = JSON.parse(json);
        const getText = obj.text;   

    //case 1
    
    if(getText){
    const convertToLower = getText.toLowerCase();
    const getLetters = convertToLower.match(/[a-z]+/g);

    let sum = 0
    let count = 0
        let arr1 = []
    if(getLetters !== null){
        
        const stemmedTweets = getLetters.map(word => {
            return stemmer(word)
        })
       
    for(let i = 0; i <stemmedTweets.length; i++){
     for(let j = 0; j<removeN.length; j++){
        let words = stemmer(removeN[j].split(",")[0]);
        let word = removeN[j].split(",")[0];
        let scores = Number(removeN[j].split(",")[1]);
        arr1.push(words)
        if(stemmedTweets[i] === words){
            count++
            sum = sum + (scores);
            let average = count / sum;
       // console.log("tweet : "+ getText +  "\n" + "\t" +"Word score: "+word+ " "+scores+ "\t" + "Stemmed: "+ stemmedTweets[i]+ " =  average : "+sum +"\t"+ average)
        }
    }
}

}
}
})
console.log(removeN)
})