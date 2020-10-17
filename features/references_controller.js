const { references } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'references', ['message'], async (bot, message) => {
    await bot.reply(message, JSON.stringify(references));
  });
}