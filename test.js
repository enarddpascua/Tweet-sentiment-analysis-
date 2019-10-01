var arr1 = [ [ 'abandon', -2 ],
[ 'abandon', 1 ],
[ 'abandon', -2 ],
[ 'abduct', 1 ],
[ 'abduct', -2 ],
[ 'abduct', -2 ],
[ 'abhor', -3 ],
[ 'abhor', 1 ],
[ 'abhor', -1 ],
[ 'abil', 2 ],
[ 'abil', 4 ] ];


var arr2 = [ [ 'abandon' ],
[ 'abil' ],
[ 'abhor' ],
[ 'abduct' ],
['test'],
['hey'],
['testAgain'],
['array']];

var arr3 = [[1],[2],[4],[5],[6],[7],[8]]
var arr4 = {}

var testlookup = new Set([].concat.apply([],arr2))

// var test = Object.assign(arr4, arr3)
var mapping = arr1.filter(([word, val]) => testlookup.has(word));

var data = Object.entries(mapping.reduce((acc, o, i) => {

  if(acc[o[0]]){
      acc[o[0]] = Math.max(o[1], acc[o[0]]);

  }else{
      acc[o[0]] = o[1];
  }
  return acc;
},{}));

console.log(arr3.reduce())