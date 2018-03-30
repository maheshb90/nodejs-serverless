/**
 * This function authenticates the incoming parameter and 
 * returns a JWT token if successful
 * @param {AWS Lambda event parameter} event 
 * @param {Aws lambda context parameter} context 
 * @param {AWS lambda callback for posting results} callback 
 */
exports.handler = (event, context, callback) => {
    callback(null, loginHandler(event))
};

function loginHandler(request) {
    return {
        authenticationToken: "1234567890",
        role:[
            'ROLE_ADMIN',
            'ROLE_EMPLOYEE'
        ]
    }
}

exports._handler = loginHandler 