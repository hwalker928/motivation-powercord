const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');

module.exports = class motivationPlugin extends Plugin {

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'motivation',
      description: 'Gets a random quote and sends it.',
      usage: '{c}',
      executor: this.quote.bind()
    });
  }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('motivation');
    }

  async quote() {
    const data = await get(`http://api.quotable.io/random`);
    return {
      send: true,
      result: `${data.body.content}`
    };
  }

};
