const EventFormat = require('../../Utils/Formats/EventFormat');

class Event extends EventFormat {
  constructor() {
    super('interactionCreate');
  };

  async run(Client, Interaction) {    
    const Member = Interaction.member;
    const Id = Interaction.customId;

    try {
      if (Interaction.isButton()) {
        if (Interaction.replied) return;
        const Message = Interaction.message;
        const guild = await Interaction.guild.fetch();
        const split = String(Id).split("_");

        if (Id.includes('')) {
          
        };
      };
    } catch(err) {
      await Interaction.reply({
        content: `I ran into an error whilst processing your request, sorry for any inconvenience.`,
        ephemeral: true
      });
    }
  };
};

module.exports = Event;