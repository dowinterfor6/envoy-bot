const { volunteer } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(volunt).*/i), ['message','direct_message'], async function(bot, message) {
    if (volunteer.length > 0) {
      await bot.reply(message, "I have the following volunteer experience:");
      volunteer.forEach(async ({ organization, position, startDate, endDate }) => {
        // TODO: Alter "I held" at random?
        const reply = `
          I held the position of ${position} at ${organization} from ${startDate} to ${endDate}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any volunteer experience");
    }
  });
}