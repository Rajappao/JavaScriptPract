function removeDuplicateWords(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
  
    // Create a Set to store unique words
    const uniqueWords = new Set();
  
    // Iterate over the words array and add each word to the Set
    for (let word of words) {
      uniqueWords.add(word);
    }
  
    // Join the unique words into a new sentence
    const uniqueSentence = Array.from(uniqueWords).join(" ");
  
    return uniqueSentence;
  }
  
  // Example usage
  const inputSentence = "This is a test sentence. This is a duplicate test sentence.";
  const result = removeDuplicateWords(inputSentence);
  console.log(result);  // Output: "This is a test sentence. duplicate"