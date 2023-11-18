const { Client, IntentsBitField } = require('discord.js')
const clan = require('./clan')
const path = require('path')
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready!`)
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand) return;

    switch (interaction.commandName) {
        case 'trophylist':
            const clantag = interaction.options.get('clan-tag').value;
            let top = null;
            if (interaction.options.get('top') !== null) {
                top = interaction.options.get('top').value;
            }
            (async () => {
                await clan.TrophyList(clantag, top, interaction);
            })();
            break;

        default:
            break;
    }
})

client.login(process.env.API_TOKEN);