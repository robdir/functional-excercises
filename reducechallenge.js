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