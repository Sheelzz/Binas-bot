const Discord = require("discord.js")
const commands = require("../handlers/commands")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message){
        const {client, prefix, owners} = bot

        if(!message.guild) return

        if(message.author.bot) return

        if(!message.content.startsWith(prefix)) return

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if(!command) return

        let member = message.member
        if(command.devOnly && !wners.includes(member.id)){
            return message.reply("This command is only available ot the bot owners")
        }

        if(command.permissions && member.permissions.missing(command.permissions).length != 0){
            return message.reply("You do not have permission to use this command")
        }

    try {
        await command.run({...bot, message, args})
    }
    catch (err){
        let errMsg = err.toString()

        if(errMsg.strsWith("?")) {
            errMsg = errMsg.slice(1)
            await message.repyl(errMsg)
        }
        else
            console.error(err)
    }

    }
}