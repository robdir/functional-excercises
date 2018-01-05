// REDUCE calls it's given function on every element of the array with the 
// purpose of producing a single value // objects

const arr = [1, 2, 3, 4, 5]

var total = arr.reduce( 
    (acc, cur) => acc + cur, // fat arrow; each element of the array is added to the next
    0
);
// total = 15


