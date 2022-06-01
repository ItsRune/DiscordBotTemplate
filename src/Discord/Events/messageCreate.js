const EventFormat = require('../../Utils/Formats/EventFormat');

class Event extends EventFormat {
  constructor() {
    super('messageCreate');
  };

  async run(Client, Message) {
    if (Message.author.bot) return;
    if (!Message.content.toLowerCase().startsWith(String(Client.Prefix).toLowerCase())) return;
    const Args = Message.content.toLowerCase().slice(String(Client.Prefix).length).split(" ");
    const Cmd = Args.shift();

    const Command = Client.Commands.get(Cmd);
    if (!Command) return;
    
    if (Message.channel.type === "DM" && Command.dmsAllowed === true) {
      return Command.run(Client, Message, Args);
    }

    const hasPermission = await Client.hasPermission(Message, Command.permissions);
    if (hasPermission) {
      Command.run(Client, Message, Args);
    }
  };
};

module.exports = Event;