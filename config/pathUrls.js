let baseUrl = '';
const configEnv = Cypress.env('getEnv');

// Checking the environment
if (configEnv === 'staging') {
    baseUrl = 'https://staging.autobahn.security'
    console.log('Running in staging environment');

} else if (configEnv === 'production') {
    baseUrl = 'https://autobahn.security'
    console.log('Running in production environment');

} else if (configEnv === 'uat') {
    baseUrl = 'https://uat.autobahn.security'
    console.log('Running in uat environment');

} else {
    console.log('Environment not found');
}

const pathUrls = {

    "signup" : `${baseUrl}${'/signup'}`
}

module.exports = pathUrls;