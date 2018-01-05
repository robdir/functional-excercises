// REDUCE calls it's given function on every element of the array with the 
// purpose of producing a single value // objects

const arr = [1, 2, 3, 4, 5]

var total = arr.reduce( 
    (acc, cur) => acc + cur, // fat arrow; each element of the array is added to the next
    0 // set the initial value to zero
);
// total is 15

// flattening an array

var nested = [[0, 1], [2, 3], [4, 5]]

var flatten = nested.reduce(
    ( acc, cur ) => acc.concat(cur),
    []
);
// flatten is [ 0, 1, 2, 3, 4, 5]

// transforming an array into an object (counting instances of values)

var flowers = [ 'Poppy', 'Daffofil', 'Bluebell', 'Bluebell', 'Bluebell',
'Poppy', 'Chrysanthemum', 'Begula', 'Dandelion']

var countedFlowers = flowers.reduce(function (arr, el) {
    if (el in arr) {
        arr[el]++;
    }
    else {
        arr[el] = 1;
    }
    return arr;
}, {});

console.log(countedFlowers);