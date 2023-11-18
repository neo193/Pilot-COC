const { Login } = require('./login');
const { client } = require('./client');

async function TrophyList(clantag, top, interaction) {
    await Login(); // Ensure login completes before proceeding
    const clan = await client.getClan(clantag);
    clan.members.sort((a, b) => b.trophies - a.trophies);
    if (top === null) {
        const memberList = clan.members.map(({ name, trophies }) => ({ name, trophies }));
        const out = memberList.map((entry) => `Name: ${entry.name}\t\t Trophies: ${entry.trophies}`).join('\n');
        interaction.reply(out);
    } else {
        let memberList = clan.members.slice(0, top);
        memberList = memberList.map(({ name, trophies }) => ({ name, trophies }));
        const out = memberList.map((entry) => `Name: ${entry.name}\t\t Trophies: ${entry.trophies}`).join('\n');
        interaction.reply(out);
    }
}

async function TopExperience(clantag, top) {
    await Login();
    const clan = await client.getClan(clantag);
    clan.members.sort((a, b) => b.expLevel - a.expLevel);
    console.log(`Top ${top} Experience Holders:`)
    for (let i = 0; i < top; i++) {
        console.log(`Name: ${clan.members[i].name}\tExperience: ${clan.members[i].expLevel}`);
    }
}

module.exports = { TrophyList, TopExperience };