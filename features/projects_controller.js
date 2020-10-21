const { projects } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(project).*/i), ['message','direct_message'], async function(bot, message) {
    if (projects.length > 0) {
      // TODO: Handle plural
      const replyIntro = "I have the following projects: ";
      await bot.reply(message, replyIntro);
      projects.forEach(async ({ title, summary }) => {
        const reply = `${title}: ${summary}`;
        await bot.reply(message, reply);
      })
      // TODO: Display more detail somewhere/somehow
    } else {
      await bot.reply(message, "I currently do not have any projects");
    }
  });
}