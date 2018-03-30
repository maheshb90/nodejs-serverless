var uut = require('./../src/login').handler
var expect = require('chai').expect
var LambdaTester = require( 'lambda-tester' );

/* Test the default case */
describe( 'handler', function() {
 
    it( 'Test Happy Path ', function() {
 
        return LambdaTester( uut )
            .event( {
                userName: "john.doe@lambda.com",
                password: "johntheman@aws"
            })
            .expectResult((result) => {
                var expected = {
                    authenticationToken: "1234567890",
                    role:[
                        'ROLE_ADMIN',
                        'ROLE_EMPLOYEE'
                    ]
                }
                expect(expected.authenticationToken == result.authenticationToken)
                expect(expected.role == result.role)
            });
    });
});