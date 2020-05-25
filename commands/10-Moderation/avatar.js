const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["pfp"],
    category: "moderation",
    description: "Returns avatar image in png format",
    run: async (clinet, message, args) => {

        let User = message.mentions.users.first()||null


        if (User != null) {
            //Sends pfp of anyone that has been pinged// In good shape //

            let Userimg = User.displayAvatarURL({ format: "png", dynamic: true});

            const Udes = [ User, '`s profile image'];

            const UEmbed = new Discord.MessageEmbed() //Embed stuff here//
                .setColor("RANDOM")
                .setTitle('Image link')
                .setURL(Userimg)
                .setDescription(Udes.join(" "))
                .setImage(Userimg)
                .setTimestamp()
            message.channel.send(UEmbed);
        
        } else {

            //Sends pfp of message author// In good shape //
            let image = message.author.displayAvatarURL({ format: "png", dynamic: true});
            let name = message.author;
        
            const des = [ name, '`s profile image'];

            const Embed = new Discord.MessageEmbed() //Embed stuff here//
                .setColor("RANDOM")
                .setTitle('Image link')
                .setURL(image)
                .setDescription(des.join(" "))
                .setImage(image)
                .setTimestamp()
            message.channel.send(Embed);
        }

    }
}