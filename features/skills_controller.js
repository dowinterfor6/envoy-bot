const { skills } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(skill|tech|tech.*stack).*/i), ['message','direct_message'], async function(bot, message) {
    if (skills.length > 0) {
      let skillMessage = skills.length === 1 ? 
      "I have the following skill:"
      :
      "I have the following skills:"

      // TODO: this wording feels terrible
      await bot.reply(message, skillMessage);
      skills.forEach(async ({ name, keywords }) => {
        const keywordsList = keywords.map((word, idx) => {
          // TODO: Refactor with interests?
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
          ${name} - ${keywordsList.join("")}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any skills");
    }
  });
}