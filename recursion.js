// Recursion basics. A recursive function is one which calls itself inside it's own code block.
// EXAMPLES

// recursive iteration
function toUpperArray(items) {
    if (!items.length) return []    // end condition
    var head = items[0]             // element of array to iterate over
    head = head.toUpperCase()       // perform an action
    var tail = items.slice(1)       // next step
    return [head].concat(toUpperArray(tail)) // recursive step
}

var any = [ 'hey friend' ]
console.log(toUpperArray(any));

// => ['HEY FRIEND']

// this example is a basic reduce function using recursion instead

 function reduce(arr, function(prev, curr, index, arr) {
    return prev + curr 
}, 0)

//instead of 

var total = [1,2,3].reduce(
    (curr, prev) => curr + prev,
    0
);

console.log(total);

