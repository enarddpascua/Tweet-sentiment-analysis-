const readline = require("readline");
const fs = require("fs");
var count = 0
readline.createInterface({
    input: fs.createReadStream("1000.txt")
  })
    .on("line", json => {
        const obj = JSON.parse(json);
        const getText = obj.text;
    
    //case 1
    if(getText){
    const convertToLower = getText.toLowerCase();
    const getLetters = convertToLower.match(/[a-z]+/gi);
    if(getLetters !== null){
    //  console.log(getLetters)
    }
  }

    //case2
    if(getText){
    const getLinks = getText.match(/http.+[a-z]+[:.].*?(?=\s)/g)
    
    if(getLinks !== null ){
        let convertToString = getLinks;
        for(let i = 0; i< convertToString.length; i++){
         const removeSpace = convertToString[i].split(/\s+\W.*/g).toString();
         const matchLink = removeSpace.match(/http.+/g)
      //console.log(matchLink, count++)
      }
    }
    }

    //case 3
    if(getText){
   const getHash = getText.match(/#[A-Za-z0-9].+/g)
   if(getHash !== null){
    for (var x = 0; x < getHash.length; x++){
      let splitHash = getHash[x].split(/\s+/g).toString();
      let getSpecificHash = splitHash.match(/#[A-Za-z0-9\W]+/g).toString();
      let test = getSpecificHash.split(/,/g);

      
      for(var j = 0; j < test.length; j++){
        const finalMatch = test[j].match(/#.+/g)
        if(finalMatch !== null){
         //console.log(finalMatch)
      }

      }
    }
  }
}

  //case 4
  if(getText){
  const getTag = getText.match(/(?<!RT\s)@+[A-Za-z0-9]+/g);
  if (getTag !== null){
   //console.log(getTag, count++)
  }
}

  //case 5
  if(getText){
    const regExoji = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c\ude32-\ude3a]|[\ud83c\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
    const getEmo = getText.match(regExoji)
    if(getEmo !== null){
   //console.log(getEmo)
    }
  }

  //case 6
  if(getText){
    const regExJap = /[-龯]|[ぁ-んァ-ン]/g;
    const getJapon = getText.match(regExJap)
    if(getJapon !== null){
    console.log(getJapon, count++)
  }
  }

  //problem 1
})


