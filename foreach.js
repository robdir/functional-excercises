// basic example of functional programming; a function which calls another function on every instance of its input. 

function repeat (operation, num) {
    for (var i = 0; i <= num; i++ ) {
        operation();
    }
}

module.exports = repeat

// JS provides this already; forEach(); -- here it is written.

function each(arr, otherFunction) {
    for (var i = 0; i < arr.length; i++) {
        otherFunction(arr[i]);
    }
}

// how would you use this? 

var pets = ['snake', 'hamster', 'golden eagle', 'crocodile', 'rhino', 'cucumber']

function print(str) {
    console.log(str)
}

function count(str) {
    console.log(str.length)
}

// now you would be able to call each function on each element of the array by using the lovely each function we wrote. of course, you could just use forEach...

console.log(each(pets, print));
console.log(each(pets, count));

console.log(pets.forEach(print));
console.log(pets.forEach(count));


each(pets, function(name) {
    console.log('This pets name is ' + name)
} )

pets.forEach(function(name){
    console.log('This pets name is ' + name)
})