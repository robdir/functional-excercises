// my solution

function getShortMessage(array) {
    var messages = array.map(i => i.message)
    var shortMsg = messages.filter(msg => msg.length < 50)
    return shortMsg
};

module.exports = getShortMessage

// their solution

function getShortMsg(array) {
    return messages.filter(function(item) {
        return item.message.length < 50
    }).map(function(item) {
        return item.message
    })
}