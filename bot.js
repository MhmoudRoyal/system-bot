const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
const adminprefix = "$";









client.on('ready', () => {                           
client.user.setGame(`_Royal force AutoRole`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});








client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Royal - Member"));
    });




 






client.login(process.env.BOT_TOKEN);
