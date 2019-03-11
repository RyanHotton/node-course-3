const socket = io()

// Elements
const $roomForm = document.querySelector('#room-form')
const $roomDropdown = document.querySelector('#room-drop')

// Templates
const roomDropTemplate = document.querySelector('#room-drop-template').innerHTML

// Variables
var currentRoom = ''

// default room template

socket.emit('getRooms', (rooms) => {
    console.log(rooms)
})


