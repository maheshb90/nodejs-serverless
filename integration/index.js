var proxyServer = require('./proxyServer')
var Client = require('node-rest-client').Client;
var expect = require('chai').expect
var client = new Client();

proxyServer.start(3000, function() {
    runTests()
})

proxyServer.end()

function runTests() {
    console.log("Running test #1")
    try {
            client.post('http://localhost:3000/login', {
                    data: {
                        userName: 'mahesh',
                        password: '123456567'
                    },
                    headers: {}
                }, function(data, response) {
                    var expected = {
                        authenticationToken: "1234567890",
                        role:[
                            'ROLE_ADMIN',
                            'ROLE_EMPLOYEE'
                        ]
            }
            expect(expected.authenticationToken == result.authenticationToken)
            expect(expected.role == result.role)
        })
    } catch(ex) {
        console.log("Exception in login:" + ex)
    }
}