function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (user) {
            return goodUsers.some(function (validUser){
                return user.id === validUser.id
            })
        })
    };
};

module.exports  = checkUsersValid