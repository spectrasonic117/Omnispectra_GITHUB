const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
require("dotenv").config();

client.login(process.env.TOKEN);

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
  if (message.content === "-version") {
    const embed = new MessageEmbed()
      //.setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Omnispectra")
      .addField("Version", "v 1.14.0 Alpha")
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
  if (message.content === "-h") {
    //message.channel.send("Aun no esta programado el comando :( ");
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Omnispectra bot")
      .setDescription("Omnispectra")
      .addField("Version de Omnispectra", "v 1.11.0 Alpha")
      .addField("Use -invite", "Para generar una invitacion del bot")
      .addField("Use -commands", "Para ver lista de comandos")

      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);

    message.channel.send(embed);
    message.delete();
  }

  if (message.content === "-special") {
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Agradecimientos Especiales")
      .addFields(
        { name: "Colorfulpanic", value: "Ayime_12", inline: false },
        { name: "Wendingo1319", value: "Ludmixduwu", inline: false },
        { name: "Karyoku", value: "Keyrushile", inline: false },
        { name: "AmbroCarr", value: "Rhasst", inline: false },
        //{ name: "\u200B", value: "\u200B" },
        { name: "PandaCosmico", value: "Alejo_El_Cangrejo", inline: false },
        { name: "Joaan_R", value: "Cheost", inline: false },
        { name: "GreenLight", value: "el.pablete", inline: false },
        { name: "Daniex", value: "Joakix05", inline: false }
      )
      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);
    message.channel.send(embed);
    message.delete();
  }

  if (message.content === "-commands") {
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Comandos Del Bot")
      .setDescription("Omnispectra Bot commands")
      .addField("-version", "Muestra la versión actual bot")
      .addField("-invite", "Muestra una invitacion del bot bot")
      .addField("-h", "Muestra Informacion del Bot")
      .addField("-special", "Muestra los agradecimientos especiales")
      .addField("-respuesta", "Muestra las respuestas del bot")
      .addField("Use -github", "Para ver el repositorio publico")
      .addField("-j", "Entrar a VC")
      .addField("-l", "Salir de VC")

      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);
    message.channel.send(embed);
    message.delete();
  }

  if (message.content === "-respuesta") {
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Respuestas del Bot")
      .setDescription("Cuando pones la palabra el bot te responde")
      .addField("a", "-> ª")
      .addField("sonic", "-> el jeshejojo")
      .addField("once, 11", "-> Chupalo entonce")
      .addField("lord", "Valdomero")
      .addField("marcelo", "Agacháte y Conocélo")
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
    case "-github":
      message.channel.send("https://github.com/spectrasonic117/Omnispectra/");
      break;
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

/*client.on("message", (message) => {
  if (message.content === "temp-test") {
    const embed = new MessageEmbed()
      .setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
      .setTitle("Agradecimientos Especiales")
      .setDescription("Omnispectra")
      .addFields(
        { name: "Liena 1a", value: "Some value here", inline: false },
        { name: "Linea 1b", value: "Some value here", inline: false },
        { name: "Liena 1c", value: "Some value here", inline: false },
        { name: "Linea 2d", value: "Some value here", inline: false },
        //{ name: "\u200B", value: "\u200B" },
        { name: "Liena 2a", value: "Some value here", inline: false },
        { name: "Linea 2b", value: "Some value here", inline: false },
        { name: "Liena 2c", value: "Some value here", inline: false },
        { name: "Linea 2d", value: "Some value here", inline: false }
        { name: "\u200B", value: "\u200B" },
        { name: "Liena 3a", value: "Some value here", inline: true },
        { name: "Linea 3b", value: "Some value here", inline: true },
        { name: "Liena 3c", value: "Some value here", inline: true },
        { name: "Linea 3d", value: "Some value here", inline: true },
        { name: "\u200B", value: "\u200B" },
        { name: "Liena 4a", value: "Some value here", inline: true },
        { name: "Linea 4b", value: "Some value here", inline: true },
        { name: "Liena 4c", value: "Some value here", inline: true },
        { name: "Linea 4d", value: "Some value here", inline: true }
      )
      .setTimestamp()
      .setFooter("Developed by Spectrasonic", "https://i.imgur.com/38vtU7x.png")
      .setColor(0x63ffd9);
    message.channel.send(embed);
    message.delete();
  }
});*/
