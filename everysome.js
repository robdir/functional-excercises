function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function isBigEnough(el, i, arr) {
            return goodUsers.some(function (el, i, arr) {
                return element.id == el.id;
            });
        });
    };
}

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

var testAllValid = checkUsersValid(goodUsers);

testAllValid([
    { id: 2 },
    { id: 1 }
]);

console.log(checkUsersValid(goodUsers) === true);