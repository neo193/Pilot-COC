const { Login } = require('./login');
const { client } = require('./client');

async function TrophyList(clantag, top) {
    await Login(); // Ensure login completes before proceeding
    const clan = await client.getClan(clantag);
    clan.members.sort((a, b) => b.trophies - a.trophies);
    if (top === null) {
        for (let i = 0; i < clan.memberCount; i++) {
            console.log(`Name: ${clan.members[i].name}\tTrophies: ${clan.members[i].trophies}`);
        }
    } else {
        for (let i = 0; i < top; i++) {
            console.log(`Name: ${clan.members[i].name}\tTrophies: ${clan.members[i].trophies}`);
        }
    }
    console.log()
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