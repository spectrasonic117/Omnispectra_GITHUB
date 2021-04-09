const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Bienvenido ${client.user.tag}! Alpha Version`);
  console.log("El Bot esta listo!");
  client.user.setActivity("-h para información", {
    type: "WATCHING", //Status: PLAYING, WATCHING, STREAMING,
    //url: "https://www.twitch.tv/spectrasonic117",
  });
});

//switch Commands

// let prefix = process.env.PREFIX;

//Version Control
client.on("message", (message) => {
  if (message.content === "--version") {
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Omnispectra")
      .addField("Version", "v 1.11.0 Alpha")
      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);

    message.channel.send(embed);
  }

  if (message.content === "-invite") {
    //message.channel.send("http://bit.ly/InviteOmnispectra ");
    message.channel.send("Generando Invitación...");
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Invite Omnispectra")
      .addField("Clic aqui para Invitar", "http://bit.ly/InviteOmnispectra")
      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);

    message.channel.send(embed);
  }
  //Programar conmando despues
  if (message.content === "-h") {
    //message.channel.send("Aun no esta programado el comando :( ");
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Omnispectra bot")
      .setDescription("Omnispectra")
      .addField("Version de Omnispectra", "v 1.11.0 Alpha")
      .addField("Use -invite", "Para generar una invitacion del bot")
      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);

    message.channel.send(embed);
    message.delete();
  }
});

client.on("message", (message) => {
  let msg = message.content.toLowerCase();
  switch (msg) {
    case "hola":
      message.channel.send("https://tenor.com/view/its-alive-gif-11313763");
      break;
    case "a":
      message.channel.send("ª");
      break;
    case "sonic":
      message.channel.send("el jeshejojo");
      break;
    case "once":
    case "11":
      message.channel.send("Chupalo entonce");
      break;
    case "lord":
      message.channel.send("Valdomero");
      break;
    case "marcelo":
      message.channel.send("Agacháte y Conocélo");
      break;
    case "mapi":
      message.channel.send("HIZO PUUUN!!! 💥💥💥");
      break;
    case "ile":
      message.channel.send("Grrr!");
      break;
    case "dyesi":
      message.channel.send("Chan Chan Chaaaaaan!");
      break;
    case "mar":
      message.channel.send("NAAAAAAMBREEE!!!");
      break;
    case "hila":
      message.channel.send("Ojos negros, piel canela 🎶 🎵");
      break;
    default:
      console.log("Comandono reconocido...");
  }
});

//Coommand Control
/*client.on("message", (message) => {
  if (message.content === "Hola") {
    message.channel.send("https://tenor.com/view/its-alive-gif-11313763");
  }

  if (message.content === "hola") {
    message.channel.send("https://tenor.com/view/its-alive-gif-11313763");
  }

  if (message.content === "a") {
    message.channel.send("ª");
  }

  if (message.content === "sonic") {
    message.channel.send("el jeshejojo");
  }

  if (message.content === "Sonic") {
    message.channel.send("el jeshejojo");
  }

  if (message.content === "once") {
    message.channel.send("Chupalo entonce");
  }

  if (message.content === "Once") {
    message.channel.send("Chupalo entonce");
  }

  if (message.content === "11") {
    message.channel.send("Chupalo entonce");
  }

  if (message.content === "lord") {
    message.channel.send("Valdomero");
  }

  if (message.content === "lord") {
    message.channel.send("Valdomero");
  }

  if (message.content === "Lord") {
    message.channel.send("Valdomero");
  }

  if (message.content === "Marcelo") {
    message.channel.send("Agacháte y Conocélo");
  }

  if (message.content === "marcelo") {
    message.channel.send("Agacháte y Conocélo");
  }

  if (message.content === "Marcelo") {
    message.channel.send("Agacháte y Conocélo");
  }

  if (message.content == "mapi") {
    message.channel.send("HIZO PUUUN!!! 💥💥💥");
  }

  if (message.content == "ile") {
    message.channel.send("Grrr!");
  }

  if (message.content == "dyesi") {
    message.channel.send("Chan Chan Chaaaaaan!");
  }

  if (message.content == "mar") {
    message.channel.send("NAAAAAAMBREEE!!!");
  }
}); */

//Voice Control
client.on("message", async (message) => {
  if (!message.guild) return;

  if (message.content === "-j") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      message.channel.send("¡Conectado con éxito!");
      message.delete();
    } else {
      message.reply("Necesitas estar en un canal de voz primero :)");
      message.delete();
    }
  }

  if (message.content === "-l") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.leave();
      message.channel.send("¡Desconectado con éxito!");
      message.delete();
    } else {
      message.reply("Ya no estoy en un canal de voz :)");
      message.delete();
    }
  }
});

client.login("NzQ0NjU3OTYyMjY5NjcxNTE1.XzmaxQ.mUHU-zgvrMdFvcH8pTdKJuoel5I");
