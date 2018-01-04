// Implement a function which takes a function as 1st arg,
// a number as the second, then executes the func by num times

function repeat (operation, num) {
    for (var i = 0; i <= num; i++ ) {
        operation();
    }
}

module.exports = repeat