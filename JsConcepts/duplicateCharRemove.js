// function duplicateCharcount(str){
//     var RemovedDuplicate = ""

//     const uniqueChars = new Set(str);
//      uniqueChars.forEach((char)=>{
//         RemovedDuplicate += char;
//     })
//     console.log(RemovedDuplicate);
// }

// var str="Malayalam rama rama"

//  duplicateCharcount(str);


// function removeDuplicates(str){
//     var index=0;
//     var len = str.length;
//     for(var i=0;i<len;i++){
//         for(var j=0;j<i;j++){
//             if(str[i]==str[j]){
//                 break;
//             }
//         }
//         if(j==i){
//             str[index++] = str[i];
//         }
//     }
//     return str.join("").slice(str,index);
// }

// var str = "Rama Rama".split("");

// console.log(removeDuplicates(str));

function removeDuplicateWords(sentence) {
    // Step 1: Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Step 2: Create a new array for unique words
    const uniqueWords = [];
  
    // Step 3: Iterate through each word
    for (let word of words) {
      // Step 4: Check if the word is already in uniqueWords
      if (!uniqueWords.includes(word)) {
        // Step 5: Add the word to uniqueWords
        uniqueWords.push(word);
      }
    }
  
    // Step 6: Join the uniqueWords array back into a sentence
    const uniqueSentence = uniqueWords.join(' ');
  
    return uniqueSentence;
  }
  
  // Example usage:
  const sentence = "This is a sentence with duplicate words. This is a sentence.";
  const result = removeDuplicateWords(sentence);
  console.log(result);