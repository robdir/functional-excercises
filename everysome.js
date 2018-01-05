function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        
    };
}

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
]

var testValidPass = [
    { id: 2 },
    { id: 3 },
    { id: 4 },
]

var testValidFail = [
    { id: 5 },
    { id: 6 },
    { id: 7 },
]

module.exports  = checkUsersValid