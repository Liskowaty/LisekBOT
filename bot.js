const Discord = require("discord.js");
const auth = require("./auth.json");
const client = new Discord.Client();
const Words = ["9gag"];
client.on("ready", () => {
 console.log("I am ready!");
});

client.on("message", (message) => {
 if (Words.some(word => message.content.includes(word))) {
 message.reply("Go away!");
 message.author.send("ONLY PICTURES.");
 message.delete();
 }
});

client.login(auth.token);