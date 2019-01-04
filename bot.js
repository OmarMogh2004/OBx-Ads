const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on("message", message => {
	
	if (message.content.startWith(prefix + "abc"){
		if (!message.member.hasPermission("ADMINSTRATOR")) return;
		let args = message.content.split(" ").slice(1);
		var argresult = args.join(' ');
		message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
			m.send(`$(argueresult)\n ${m}`);
		})
		message.channel.send(`\`$(message.guild.members.filter(m => m.presence.status !=='online').size}\`عدد الاعضاء المستلمين`);
			message.delete();
			};
			});
			bot.on('ready', () => {
	console.log("Ready To Go");
});

client.login("NTMwNzY5NTU0MTA5MTA0MTI5.DxEjpg.ubytBF1bJI0KymuWqrBGdnoTffA");
			

