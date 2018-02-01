// // filtering an array

// function basicFilter(messages) {
//    const short = messages.filter(message => message.length < 47 )
//    return short
// }

// module.exports = basicFilter

// const arr = ['Lorem ipsum dolor sit amet',
// 'consectetur adipiscing elit. Sed nulla lorem,',
// 'finibus nec mi a, pharetra imperdiet neque. Morbi ut massa',
// 'fermentum justo suscipit vestibulum. Donec sed finibus tortor, sed placerat sem.']

// // console.log(basicFilter(arr));

// // filtering an object (way more useful)

// const messageArr = [ 
//     {message: 'Lorem ipsum dolor sit amet'},
//     {message: 'consectetur adipiscing elit. Sed nulla lorem,'},
//     {message: 'finibus nec mi a, pharetra imperdiet neque. Morbi ut massa'},
//     {message: 'fermentum justo suscipit vestibulum. Donec sed finibus tortor, sed placerat sem.'}
// ];

// function getShortMessage(array) {
//     var messages = array.map( i => i.message )
//     var shortMsg = messages.filter( msg => msg.length < 47 )
//     return shortMsg
// };

// console.log(getShortMessage(messageArr)); 

const batches = [
    {
        _id: "5a0ded7ac5538066d5814d9f",
        batchNum: 11,
        startsAt: "2017-10-23T00:00:00.000Z",
        endsAt: "2017-12-30T00:00:00.000Z",
        __v: 0,
        students: [
            {
                name: "Jodoc Hafsah",
                picture: "https://randomuser.me/api/portraits/men/87.jpg",
                _id: "5a0ded7ac5538066d5814da0",
                ratings: [
                    {
                        colour: 0,
                        comments: "Student is obviously struggling.",
                        _id: "5a0ded7ac5538066d5814da2",
                        ratedAt: "2017-10-24T00:00:00.000Z"
                    },
                    {
                        colour: 1,
                        comments: "Progress is being made.",
                        _id: "5a0ded7ac5538066d5814da1",
                        ratedAt: "2017-08-29T00:00:00.000Z"
                    }
                ]
            }
        ]
    },
    {
        _id: "5a0ded7ac5538066d5814d9b",
        batchNum: 10,
        startsAt: "2017-08-23T00:00:00.000Z",
        endsAt: "2017-10-30T00:00:00.000Z",
        __v: 0,
        students: [
            {
                name: "Brita Everard",
                picture: "https://randomuser.me/api/portraits/women/30.jpg",
                _id: "5a0ded7ac5538066d5814d9c",
                ratings: [
                    {
                        colour: 0,
                        comments: "Teaching Brita is akin to bathing in hot sauce.",
                        _id: "5a0ded7ac5538066d5814d9e",
                        ratedAt: "2017-08-28T00:00:00.000Z"
                    },
                    {
                        colour: 1,
                        comments: "Progress is being made.",
                        _id: "5a0ded7ac5538066d5814d9d",
                        ratedAt: "2017-08-29T00:00:00.000Z"
                    }
                ]
            }
        ]
    }
]

const students = batches.filter(i => i._id === '5a0ded7ac5538066d5814d9f' )

console.log(students);