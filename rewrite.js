var route1 = [2.1, 3.5, 0.3, 5.2]

function kilometerToMile(km) {
    return km / 1.6
}


function routeInMilesFirst(route) {
    var res = []
    for (var i = 0; i < route.length; i++) {
        var mile = kilometerToMile(route[i])
        res[i] = mile                        
    }
    return res
}

function routeInMiles(route) {
    const res = route.map( el => el / 1.6 )
    return res 
}

// test
console.log(JSON.stringify(routeInMiles(route1))
=== JSON.stringify(routeInMilesFirst(route1)))

// passed!


function longStretches(route) {
    var res = []
    for (var i = 0; i < route.length; i++) { // iterate
        var stretch = route[i]               // ? ...
        if (stretch > 2) {                   // check
            res.push(stretch)                // keep
        }
    }
    return res
}

function longStretchesFilter(route) {
    const res = route.filter( el => el > 2)
    return res
}

// test
console.log(JSON.stringify(longStretches(route1))
=== JSON.stringify(longStretchesFilter(route1)))

function total(route) {
    // rewrite ...
    var res = 0
    for (var i = 0; i < route.length; i++) { // iterate
        res += route[i]                      // ? ..., ? ...
    }
    return res
}


function totalReduce(route) {
    const res = route.reduce( (x, y) => x + y )
    return res
}

// test
console.log(total(route1) === 11.1)
console.log(totalReduce(route1) === 11.1)