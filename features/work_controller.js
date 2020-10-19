const { work } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Employment?
  // TODO: regex for each company?
  controller.hears(new RegExp(/.*(work|job).*/i), ['message','direct_message'], async function(bot, message) {
    if (work.length > 0) {
      work.forEach(async ({ company, position, startDate, endDate, summary }, idx) => {
        // TODO: Alter "I held" at random?
        // TODO: Wording/layout is clunky
        const also = idx === 0 ? "" : "also";
        const reply = `
          I ${also} held the position of ${position} at ${company} from ${startDate} to ${endDate}.
          \nA quick summary: ${summary}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics/highlights?
    } else {
      await bot.reply(message, "I currently do not have any work experience");
    }
  });
}