const resume = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*help.*/i), ['message','direct_message'], async function(bot, message) {
    // TODO: Add quick replies
    // TODO: idk why it doesn't work without toString
    const nonEmptyKeys = Object.keys(resume).filter((field) => resume[field].toString());
    await bot.reply(message, `Ask me anything you'd like to know more about, such as ${nonEmptyKeys.join(', ')}`);
  });
}