const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hate')
		.setDescription('Replies with how the bot truly feels.'),
	async execute(interaction) {
		await interaction.reply('Got the fuck outta this server.');
	},
};