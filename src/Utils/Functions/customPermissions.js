const Discord = require('discord.js');

// Only pass Message and Members!
function hasPermission(Message, Permissions, Guild) {
  const Settings = require('../../../Settings.json');
  const Member = (Object.keys(Message).includes('author') !== null) ? Message.member : Message;
  const GroupId = Settings.Options.RobloxGroupId;

  let goodToRun = 0;
  Guild = (!Guild) ? Message.guild : Guild;

  for (let i = 0; i < Permissions.length; i++) {
    let permName = Permissions[i];

    if (String(permName).toLowerCase().includes("clientid")) {
      let idNeeded = String(permName).toLowerCase().split(":")[1];

      if (String(Member.id) === idNeeded) {
        goodToRun++;
      }
    } else if (String(permName).toLowerCase().includes("guildid")) {
      let idNeeded = String(permName).toLowerCase().split(":")[1];

      if (String(Guild.id) === idNeeded) {
        goodToRun++;
      }
    } else if (String(permName).toLowerCase().includes("ownership")) {
      if (Guild.ownerId === Member.id) {
        goodToRun++;
      }
    } else if (String(permName).toLowerCase().includes('channelid')) {
      const ChannelId = String(permName).toLowerCase().split(":")[1];

      if (String(Message.channel.id) == String(ChannelId)) {
        goodToRun++;
      }
    } else if (Member.permissions.has(Discord.Permissions.FLAGS[String(Permissions[i]).toUpperCase()])) {
      goodToRun++;
    }
  };

  if (Permissions.length > 0 && goodToRun > 0) {
    return true;
  } else if (Permissions.length === 0) {
    return true;
  }

  return false;
}

module.exports = hasPermission;