// a basic map which doubles each element of the array and returns in. see below for the longhand

function doubleAll(numbers) {
    const doubled = numbers.map(element => element * 2)
    return doubled
}

console.log(doubleAll([5, 4, 14, 89, 53]));

module.exports = doubleAll

// this with a for loop

function doubleAll(numbers) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
    }
    return result
}
