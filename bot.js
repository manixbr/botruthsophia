const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity('Lolizinha!', { type: 'WATCHING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // comando ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  //comando oi linda
  if(comando === "oi minha linda") {
      const m = send("Oii fofo!")
      m.edit(`Oii fofo!`);
  }

});

client.login(config.token);