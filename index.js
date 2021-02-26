const { get } = require('powercord/http');
const { Plugin } = require('powercord/entities');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
class RandomJoke extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'pollux',
            aliases: ['poll'],
            usage: '{c} [--send]',
            executor: args => this.getJoke(args)
        })
    }
    async getJoke(args) {

        return {
            send: true,
            result: `${args.join(" ").replaceAll("i", "ii").replaceAll("s", "2").replaceAll("\"", "").replaceAll("to", "two")}`
        }
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('pollux');
    }
}


module.exports = RandomJoke;