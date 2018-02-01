function duckCount() {
    return Array.filter.call(arguments, item => {
        return Object.hasOwnProperty.call(item, 'quack');
    }).length;
}

module.exports = duckCount;