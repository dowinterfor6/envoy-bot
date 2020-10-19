const { education } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(educat|school|colleg|university).*/i), ['message','direct_message'], async function(bot, message) {
    if (education.length > 0) {
      education.forEach(async ({ institution, area, startDate, endDate, studyType }) => {
        let reply;
        if (studyType) {
          reply = `
            I received a ${studyType} in ${area} from ${institution}, ${startDate} to ${endDate}
          `
          await bot.reply(message, reply);
        } else {
          reply = `
            I studied ${area} at ${institution}, ${startDate} to ${endDate}
          `
          await bot.reply(message, reply);
        }
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any education");
    }
  });
}