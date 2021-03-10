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
    return {
      send: true,
      result: 'ok'
    };
  }

};
