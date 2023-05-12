const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const events = require('events')

const emmiter = new events.EventEmitter()

app.use(cors()) 
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const messages = [
    {
        author: 'Dave',
        message: 'Hello there!',
        dateSent: new Date()
    }
]

function sendResponse(response, type, body) {
    const resType = type;
    const resData = JSON.stringify(body);

    const resTypeBody = `type: ${resType} \n`;
    const resDataBody = `data: ${resData} \n\n`;

    response.write(resTypeBody);
    response.write(resDataBody);
}

app.get('/api/sse/connect', (req, res) => {
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('Content-Type', 'text/event-stream')

    emmiter.once('first-connect', (messages) => {
        res.write(`data: ${JSON.stringify(messages)} \n\n`)
    })

    emmiter.emit('first-connect', messages)


    emmiter.on('new-message', ({author, message, dateSent}) => {
        sendResponse(res, 'message', {author, message, dateSent});
    })
})

app.post('/api/sse/send-msg', (req, res) => { 
    const { author, message, dateSent } = req.body 
 
    emmiter.emit('new-message', { author, message, dateSent })
    messages.push({author, message, dateSent}) 

    console.log(messages)
    res.status(200).end()
})

app.listen(7070, () => {
    console.log('Listening on port: 7070')
})