const { references } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(ref|reference).*/i), ['message','direct_message'], async function(bot, message) {
    if (references.length > 0) {
      let referenceMessage = references.length === 1 ? 
      "I have the following reference:"
      :
      "I have the following references:"

      // TODO: this wording feels terrible
      await bot.reply(message, referenceMessage);
      references.forEach(async ({ name, reference }) => {
        await bot.reply(message, `${name} - ${reference}`);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any references");
      // TODO: Send e-mail to request reference
    }
  });
}