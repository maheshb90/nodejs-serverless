/**
 * This file will create an express web server that hosts the 
 * AWS lambda endpoints, proxying the lambda scaffolding parameters
 * such as callbacks and context
 */

const express = require('express')
const app = express()
var login = require('./../src/login')._handler

var serverInstance = null

function startServer(port, startedCallback) {

    /* Start a server */
    app.post('/login', (req, res) => {
        var result = login(req)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result))
    })

    serverInstance = app.listen(port, () => {
        console.log('Listening on port ' + port +'! ')
        startedCallback()
    })

}

function killServer() {
    serverInstance.close()
}

exports.start = startServer
exports.end = killServer