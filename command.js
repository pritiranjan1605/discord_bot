const { REST, Routes } = require('discord.js');
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name:'start',
        description: 'replies with start',
    },
];
const rest = new REST({ version: '10' }).setToken('MTE1NDEyODQ0MTY1MDcyMDc4Mw.Gee5Vk.44L2L7qQczJzzoBCKW-AtOpAeT8eVMJRapy4xM'
);
try {
    console.log('Started refreshing application (/) commands.');

    rest.put(Routes.applicationCommands('1154128441650720783'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}