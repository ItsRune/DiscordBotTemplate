const CommandFormat = require('../../Utils/Formats/CommandFormat');

/*
Custom permissions include:
- "clientid:MemberId_Here" // Separated by the colon, checks if the member whose running the command is equal to it.
- "ownerid" // checks for if the member is the owner of the guild.
- "guildid:GuildId_Here" // Checks if the command was ran in specified guild.
- "channelid:ChannelId_Here" // Checks if the command was rank is the specified channel id.
- "grouprank:RobloxRank_Here:Tolerance" // Checks if the member's linked roblox account to bloxlink is within. Tolerance is optional, default: ">="
*/

class Command extends CommandFormat {
  constructor() {
    // Cmd Name, Cmd Description, Alias, Usage, canBeUsedInDms, Permissions
    super('ping', 'test', ['p'], '', true, [
        // Do not put discord permission flags, put the names instead.
    ]);
  };

  async run(Client, Message, Args) {
    Message.reply("Pong!");
  };
};

module.exports = Command; // Enable this to create the command.