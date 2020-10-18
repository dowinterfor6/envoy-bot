const { publications } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(publish|publication).*/i), ['message','direct_message'], async function(bot, message) {
    if (publications.length > 0) {
      let publicationMessage = publications.length === 1 ? 
      "I have made the following publication:"
      :
      "I have made the following publications:"

      // TODO: this wording feels terrible
      await bot.reply(message, publicationMessage);
      publications.forEach(async ({ name, publisher, releaseDate, summary }) => {
        const reply = `
          ${name} - ${summary}, published by ${publisher} on ${releaseDate}
        `
        await bot.reply(message, reply);
      })
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any publications");
    }
  });
}