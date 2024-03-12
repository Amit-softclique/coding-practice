function groupAnagrams(words) {
    const anagrams = {};
  
    const sortString = (str) => str.split('').sort().join('');
  
    for (let word of words) {
      const sortedWord = sortString(word);
  
      if (anagrams[sortedWord]) {
        anagrams[sortedWord].push(word);
      } else {
        anagrams[sortedWord] = [word];
      }
    }
  
    const result = Object.values(anagrams);
  
    return result;
  }
  
  const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const groupedAnagrams = groupAnagrams(words);
  console.log(groupedAnagrams);