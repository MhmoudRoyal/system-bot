const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "#";
client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});




client.on('ready', () => {
client.user.setGame(`SYSTEM SERVER BOM BOT SUPPORT`);
});










client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});
















client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***👑WELCOME TO SERVER👑***')
.setThumbnail(member.avatarURL)
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});














client.on("message", message => {
 if (message.content === `#help`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setColor("#678234")//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setDescription(`SYSTEM SERVER BOM BOT ♧
ℹ#credit⇏لمعرفت رصيدك بلبوت
ℹ#daily⇏لتأخد رصيدك اليومي بلبوت
ℹ#credits⇏لتعطي كريدت لشخص منشنه واكتب رقم المبلغ
 `)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

   }
   });
















client.login(process.env.BOT_TOKEN);
