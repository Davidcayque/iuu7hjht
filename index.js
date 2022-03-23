//Iniciar e fazer leitura da config.
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'channel') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)//Requisitando a pasta commands, juntamente aos comandos dentro.
    commandFile.run(client, message, args);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
    .setColor('#ef00ff')
    .setDescription(`${message.author}, O comando digitado não existe.`)
    return message.channel.send(embed);
  }
});

client.login(config.token); //Token para deixar o bot online!