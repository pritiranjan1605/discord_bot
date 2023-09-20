const { Client, GatewayIntentBits } = require ('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate',(message)=>{
    console.log(message.content);
    if(message.author.bot)return;
    if(message.content.startsWith('create')){
        const url=message.content.split('create');
        return message.reply({content :'generating short url for' + url,});
    }
    message.reply({content:"hi welcome to the developers family"});
});
client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("pong!!!")
    if(interaction.commandName==='start')
    {
        interaction.reply("start!!!")
    }
})
client.login (
    'MTE1NDEyODQ0MTY1MDcyMDc4Mw.Gee5Vk.44L2L7qQczJzzoBCKW-AtOpAeT8eVMJRapy4xM'
)