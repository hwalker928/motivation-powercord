const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');

module.exports = class ChuckNorrisPlugin extends Plugin {

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'ChuckNorris',
      description: 'Pulls a random joke for the Chuck Norris API and sends it in chat.',
      usage: '{c}',
      executor: this.joke.bind()
    });
  }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('ChuckNorris');
    }

  async joke() {
    const data = await get(`https://api.chucknorris.io/jokes/random`);
    return {
      send: true,
      result: `${data.body.value}`
    };
  }
};

