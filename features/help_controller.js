const resume = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(help).*/i), ['message','direct_message'], async function(bot, message) {
    // TODO: Add quick replies
    await bot.reply(message, `Ask me anything you'd like to know, such as ${Object.keys(resume).join(', ')}`);
  });
}