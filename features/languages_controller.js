const { languages } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'languages', ['message'], async (bot, message) => {
    await bot.reply(message, JSON.stringify(languages));
  });
}