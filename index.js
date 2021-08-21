// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// Bring in the .env file
require('dotenv').config()


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.login(process.env.CLIENT_TOKEN); //login bot using token