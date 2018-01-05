// filtering an array

function basicFilter(messages) {
   const short = messages.filter(message => message.length < 47 )
   return short
}

module.exports = basicFilter

const arr = ['Lorem ipsum dolor sit amet',
'consectetur adipiscing elit. Sed nulla lorem,',
'finibus nec mi a, pharetra imperdiet neque. Morbi ut massa',
'fermentum justo suscipit vestibulum. Donec sed finibus tortor, sed placerat sem.']

// console.log(basicFilter(arr));

// filtering an object (way more useful)

const messageArr = [ 
    {message: 'Lorem ipsum dolor sit amet'},
    {message: 'consectetur adipiscing elit. Sed nulla lorem,'},
    {message: 'finibus nec mi a, pharetra imperdiet neque. Morbi ut massa'},
    {message: 'fermentum justo suscipit vestibulum. Donec sed finibus tortor, sed placerat sem.'}
];

function getShortMessage(array) {
    var messages = array.map( i => i.message )
    var shortMsg = messages.filter( msg => msg.length < 47 )
    return shortMsg
};

console.log(getShortMessage(messageArr)); 