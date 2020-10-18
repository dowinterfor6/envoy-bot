const { languages } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(language|speak).*/i), ['message','direct_message'], async function(bot, message) {
    if (languages.length > 0) {
      let languageMessage = languages.length === 1 ? 
      "I speak the following language:"
      :
      "I speak the following languages:"

      await bot.reply(message, languageMessage);
      languages.forEach(async ({ language, fluency }) => {
        await bot.reply(message, `${language} - ${fluency}`);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not know any languages");
    }
  });
}