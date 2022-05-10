const Client = require('../../Discord/index');
const Roblox = require('noblox.js');
const addCommands = require('./addCommands');
const addEvents = require('./addEvents');
const Settings = require('../../../Settings.json');

async function Initialize() {
  try {
    await Roblox.setCookie(Settings.Roblox_Token);
  } catch(error) {
    console.error(`Roblox Error: ${error.message}`);
  };
  
  try {
    await addCommands(Client, '../../Discord/Commands');
    await addEvents(Client, '../../Discord/Events');
    
    await Client.login(Settings.Discord_Token);
  } catch(err) {
    console.error(`Discord Error: ${err.message}`);
  }
};

module.exports = Initialize;