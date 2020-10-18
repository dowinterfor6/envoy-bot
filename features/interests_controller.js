const { interests } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(interest|hobby).*/i), ['message','direct_message'], async function(bot, message) {
    if (interests.length > 0) {
      await bot.reply(message, "I have the following interests:");
      interests.forEach(async ({ name, keywords }) => {
        const keywordsList = keywords.map((word, idx) => {
          switch (idx) {
            case 0:
              return word;
            case keywords.length - 1:
              return `, and ${word}`;
            default:
              return `, ${word}`;
          }
        })
        const reply = `
          ${name}, such as ${keywordsList.join("")}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any interests");
    }
  });
}