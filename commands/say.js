const Discord = require("discord.js");

module.exports = {
  name: "say",
  //O bot irá falar sua mensagem!

  run: async(client, message, args) => {
    let msg = args.join(" "); //setando....

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} **Você não tem permissão para utilizar esse comando**`); //Caso o membro não tenha permissão, aparecerá essa mensagem.


    if (!msg) return message.channel.send(`:x: | ${message.author} Você precisa escrever algo para eu falar!`); //Caso não escreva nada ao comando aparecerá essa mensagem.

    message.delete //Deletará seu comando.
    message.channel.send(` 

${msg}`) //E bot mandará sua mensagem.
  }
}