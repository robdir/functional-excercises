// my solution

function countWords(inputWords) {
   return inputWords.reduce(function (arr, el) {
        if (el in arr) {
            arr[el]++;
        }
        else {
            arr[el] = 1;
        }
        return arr
    }, {})
};

module.exports = countWords

// their solution

function countSomeWords(arr) {
    return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialise to 1
        return countMap 
    }, {}) // second argument of reduce initialises countMap to 1
}