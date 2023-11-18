const { client } = require('./client');
require('dotenv').config();

async function Login() {
    const password = process.env.PASSWORD;
    const email = process.env.EMAIL;
    if (!password) {
        throw new Error('PASSWORD environment variable not set');
    }

    await client.login({ email, password });
}

module.exports = { Login };