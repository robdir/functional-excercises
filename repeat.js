// basic example of functional programming; a function which calls another function on every instance of its input. 

function repeat (operation, num) {
    for (var i = 0; i <= num; i++ ) {
        operation();
    }
}

module.exports = repeat

// 