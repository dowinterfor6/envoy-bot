const { skills, projects } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(skill|tech|tech.*stack).*/i), ['message','direct_message'], async function(bot, message) {
    if (skills.length > 0) {
      skills.forEach(async ({ name, keywords }, outerIdx) => {
        const also = outerIdx === 0 ? "" : "also";
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
        let skillMessage = keywords.length === 1 ? 
          `I ${also} have a skill in `
          :
          `I ${also} have skills in`
        // TODO: I still feel this wording is awkward
        const reply = `
          ${skillMessage} ${name}: ${keywordsList.join("")}
        `
        await bot.reply(message, reply);
      });

      const payloadRes = {
        type: "skills",
        payload: { 
          skills,
          projects
        }
      }
      await bot.reply(message, payloadRes);
      // TODO: Add follow up for specifics?
    } else {
      await bot.reply(message, "I currently do not have any skills");
    }
  });
}