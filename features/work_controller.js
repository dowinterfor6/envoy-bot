const { work } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Employment?
  // TODO: regex for each company?
  controller.hears(new RegExp(/.*(work|job).*/i), ['message','direct_message'], async function(bot, message) {
    if (work.length > 0) {
      await bot.reply(message, "I have the following work experience:");
      work.forEach(async ({ company, position, startDate, endDate }) => {
        // TODO: Alter "I held" at random?
        const reply = `
          I held the position of ${position} at ${company} from ${startDate} to ${endDate}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any work experience");
    }
  });
}