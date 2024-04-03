// function countDuplicates(string) {
//     const charCount = {};
//     const duplicates = {};
  
//     // Count the occurrences of each character
//     for (let char of string) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
  
//     // Find the duplicate characters
//     for (let char in charCount) {
//       if (charCount[char] > 1) {
//         duplicates[char] = charCount[char];
//       }
//     }
  
//     return duplicates;
//   }
  
//   // Example usage
//   const inputString = "hello";
//   const duplicateCounts = countDuplicates(inputString);
//   console.log(duplicateCounts); // Output: { 'l': 2 }


// function countCharacter(str){
//     var charCount = {};
//     var duplicateCharacter = {};
//     var uniqueChracter = {};

//     for(var i = 0; i < str.length; i++){
//         var char = str[i];

//         if(charCount[char] === undefined ){
//              charCount[char] = 1;
//         } else {
//          charCount[char]++;
//         }

//     }
   
//     for(var char in charCount){
//         if(charCount[char]>1){
//             duplicateCharacter[char] =  charCount[char];
//         }else{
//             uniqueChracter[char] =  charCount[char];
//         }
//     }
   
//     console.log( "Duplicate chars "+JSON.stringify(duplicateCharacter));
//     console.log( "Unique chars "+JSON.stringify(uniqueChracter));

//    return charCount;
// }


// var inputstring = "RajappaoTestAutomation"

// // var characterCounts = countCharacter(inputstring);

// // console.log("Character count "+JSON.stringify(characterCounts));


// countCharactors(inputstring);

// function countCharactors(str=""){
//  var charCount = {};
//  var duplicateChar = {};
//  var unique = {};

//  for(let i = 0; i< str.length; i++){
//     var char = str[i];

//     if(charCount[char] === undefined){
//         charCount[char] = 1;
//     }else{
//         charCount[char]++;
//     }
//  }

//   for(let char in charCount){
//      if(charCount[char]>1){
//         duplicateChar[char] = charCount[char]
//      }else{
//         unique[char] = charCount[char];
//      }
//   }

//   var charString = JSON.stringify(charCount);


//   console.log("Chatracter count "+charString);
//   console.log("Duplicate count "+duplicateChar);
//   console.log("Unique characters are "+unique);

// }

// asynchronous behavior
// console.log("helloo");
// setTimeout(()=>{
//    console.log("jilll");
// },3000);
// console.log("yoell");


// function one(call_two){
//    call_two();
//    console.log("step one completed");
// }

// function two(){
//    console.log("hi");
// }

// one(two)    


const myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('age', 25);

console.log("mymap "+ JSON.stringify(myMap));
// console.log(myMap.get('name')); // Output: Alice

// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });