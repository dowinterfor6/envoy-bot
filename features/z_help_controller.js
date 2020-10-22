const resume = require('../resume/resume.json');

module.exports = (controller) => {
  const nonEmptyKeys = Object.keys(resume).filter((field) => resume[field].toString());
  const formattedKeys =
    `${nonEmptyKeys.slice(0, nonEmptyKeys.length - 2).join(", ")} or ${nonEmptyKeys[nonEmptyKeys.length - 1]}`
  
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*help.*/i), ['message','direct_message'], async function(bot, message) {
    // TODO: Add quick replies
    // TODO: idk why it doesn't work without toString

    await bot.reply(message, `Ask me anything you'd like to know more about, such as ${formattedKeys}`);
  });

  controller.hears(new RegExp(/.*/i), ['message','direct_message'], async function(bot, message) {
    // TODO: Add quick replies
    // TODO: idk why it doesn't work without toString
    
    await bot.reply(message, `I'm sorry, I didn't understand that. Did you mean to ask about ${formattedKeys}?`);
  });
}