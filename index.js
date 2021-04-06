const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');
const manifest = require('manifest.json');

module.exports = class ChuckNorrisPlugin extends Plugin {

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'chucknorris',
      description: 'Pulls a random joke from the Chuck Norris API and sends it in chat.',
      usage: '{c}',
      executor: this.cn.bind()
    });
    powercord.api.commands.registerCommand({
      command: 'cninfo',
      description: 'Information about ChuckNorris plugin.',
      usage: '{c}',
      executor: this.info.bind()
    });
  }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('chucknorris');
        powercord.api.commands.unregisterCommand('cninfo');
    }

  async cn() {
    const data = await get(`https://api.chucknorris.io/jokes/random`);
    return {
      send: true,
      result: `${data.body.value}`
    };
  }
  
  async cn() {
    const data = await get(`https://api.chucknorris.io/jokes/random`);
    return {
      send: false,
      result: {
        type: 'rich',
        title: 'ChuckNorris-PowerCord Plugin Info',
        description: `**__Name:_** \`${manifest.name}\`\n**__Description:_** \`${manifest.description}\`\n**__Version:_** \`${manifest.version}\`\n**__Author:_** \`${manifest.author}\``,
        color: this.getRandomColour,
        footer: {
          text: 'ChuckNorris-PowerCord'
        }
      }
    };
  }
  
};

