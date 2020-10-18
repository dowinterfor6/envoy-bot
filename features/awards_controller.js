const { awards } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Synonyms for award/accolade?
  controller.hears(new RegExp(/.*(award|accolade).*/i), ['message','direct_message'], async function(bot, message) {
    if (awards.length > 0) {
      let awardMessage = awards.length === 1 ? 
      "I have the received the following award:"
      :
      "I have the received the following awards:"

      // TODO: this wording feels terrible
      await bot.reply(message, awardMessage);
      awards.forEach(async ({ title, date, awarder, summary }) => {
        // TODO: Alter "I was awarded" at random?
        const reply = `
          ${title} at ${awarder} on ${date} for ${summary}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any awards");
    }
  });
}