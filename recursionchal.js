function reduce(arr, fn, initial) {
    return (function reduceOnce(curr, prev) {
        if ( curr >= arr.length ){
            return prev;
        }
        return reduceOnce(curr + 1, fn(prev, arr[curr], curr, arr));
    } (0, initial));
}

module.exports = reduce