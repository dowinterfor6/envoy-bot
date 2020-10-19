const { awards } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Synonyms for award/accolade?
  controller.hears(new RegExp(/.*(award|accolade).*/i), ['message','direct_message'], async function(bot, message) {
    if (awards.length > 0) {
      let reply;

      if (awards.length === 1) {
        const { title, awarder, date, summary } = awards[0];
        reply = `
          I received ${title} from ${awarder} on ${date} for ${summary}
        `;

        await bot.reply(message, reply);
      } else {
        await bot.reply(message, "I've received the following awards:");
        awards.forEach(async ({ title, date, awarder, summary }) => {
          const reply = `
            ${title} from ${awarder} on ${date} for ${summary}
          `;
          await bot.reply(message, reply);
        })
      }
    } else {
      await bot.reply(message, "I currently do not have any awards");
    }
  });
}