const { education } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(educat|school|colleg|university).*/i), ['message','direct_message'], async function(bot, message) {
    if (education.length > 0) {
      // TODO: this wording feels terrible
      await bot.reply(message, "I have the received the following education:");
      education.forEach(async ({ institution, area, startDate, endDate, studyType }) => {
        // TODO: Alter "I studied" at random?
        // TODO: How do i use study type?
        const reply = `
          I studied ${area} at ${institution} from ${startDate} to ${endDate}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any education");
    }
  });
}