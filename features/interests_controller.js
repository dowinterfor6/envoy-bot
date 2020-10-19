const { interests } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(interest|hobby|hobbies|free time).*/i), ['message','direct_message'], async function(bot, message) {
    if (interests.length > 0) {
      interests.forEach(async ({ name, keywords }, idx) => {
        const keywordsList = keywords.map((word, idx) => {
          // TODO: Refactor with skills?
          switch (idx) {
            case 0:
              return word;
            case keywords.length - 1:
              return ` and ${word}`;
            default:
              return `, ${word}`;
          }
        })
        const reply = `
          ${name.toLowerCase()}, such as ${keywordsList.join("")}
        `
        const also = idx === 0 ? '' : 'also';
        await bot.reply(message, `I'm ${also} interested in ${reply}`);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any interests");
    }
  });
}