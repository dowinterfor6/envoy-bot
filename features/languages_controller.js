const { languages } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*(language|speak).*/i), ['message','direct_message'], async function(bot, message) {
    if (languages.length > 0) {
      let languageByFluency = {};

      languages.forEach(({ language, fluency }) => {
        if (!languageByFluency[fluency.toLowerCase()]) {
          languageByFluency[fluency.toLowerCase()] = [language];
        } else {
          languageByFluency[fluency.toLowerCase()].push(language);
        }
      });

      const fluencyArr = Object.keys(languageByFluency);
      // TODO: Overkill, but custom sort function by fluency

      fluencyArr.forEach(async (fluency, idx) => {
        const languages = languageByFluency[fluency];
        const also = idx === 0 ? "" : "also";
        let joinLanguages;
        if (languages.length === 1) {
          joinLanguages = languages[0];
        } else {
          joinLanguages = languages.map((language, idx) => {
            switch (idx) {
              case 0:
                return language;
              case languages.length - 1:
                return ` and ${language}`;
              default:
                return `, ${language}`;
            }
          }).join('');
        }

        const reply = fluency.toLowerCase() === "native speaker" ?
          `I am ${also} a ${fluency.toLowerCase()} of ${joinLanguages}`
          :
          `I am ${also} ${fluency.toLowerCase()} in ${joinLanguages}`;

        await bot.reply(message, reply);
      });

    } else {
      await bot.reply(message, "I currently do not know any languages");
    }
  });
}