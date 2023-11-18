const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: "trophylist",
        description: 'Returns a list of all clan members and their trophy count.',
        options: [
            {
                name: 'clan-tag',
                description: 'The clantag of the clan.',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'top',
                description: 'Number of top trophy holders to display.',
                type: ApplicationCommandOptionType.Number,
            }
        ]
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.API_TOKEN);

(async () => {
    try {
        console.log('Registering Commands...');

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Registered all commands succesffully!');
    } catch (error) {
        console.log(`Ran into an error: ${error}`);
    }
})();