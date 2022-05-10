const EventFormat = require('../../Utils/Formats/EventFormat');

class Event extends EventFormat {
  constructor() {
    super('ready');
  };

  async run(Client) {
    console.log(`${Client.user.tag} is ready.\nThe prefix specified is "${Client.Prefix}"`);
  };
};

module.exports = Event;