const { Plugin } = require('powercord/entities');

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
    const data = await get(`http://api.quotable.io/random`).then(r => r.json);
    return {
      send: true,
      result: data['content']
    };
  }

};
