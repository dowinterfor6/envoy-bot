const { basics } = require('../resume/resume.json');

module.exports = (controller) => {
  // TODO: Use regex for more robust
  controller.hears(new RegExp(/.*basic.*/i), ['message','direct_message'], async function(bot, message) {
    await bot.reply(message, `Hi, I'm ${basics.name}, and I am a ${basics.label}.`);
    await bot.reply(message, basics.summary);
  });

  controller.hears(new RegExp(/.*contact.*/i), ['message','direct_message'], async function(bot, message) {
    const reply = `
      You can contact me via e-mail at ${basics.email}
      ${basics.phone ? ` or via phone at ${basics.phone}`: ''}
    `;

    await bot.reply(message, reply);
    // TODO: add prompt for sending an e-mail message
  });

  controller.hears(new RegExp(/.*(website|social|portfolio).*/i), ['message','direct_message'], async function(bot, message) {
    // TODO: add preferred
    await bot.reply(message, `My personal website is at ${basics.website}`);
    const socialMedia = basics.profiles;
    console.log(socialMedia);
    if (socialMedia.length > 0) {
      // TODO: reply with link?
      socialMedia.forEach(async ({ network, username, url }) => {
        // TODO: Replace "you can also find me" repetition for future use
        await bot.reply(message, `You can also find me on ${network}: ${url} ${username ? `(as ${username})` : ''}`);
      });
    }
  });

  // TODO: where are you?
  controller.hears(new RegExp(/.*locat.*/i), ['message','direct_message'], async function(bot, message) {
    // TODO: preferences?
    const { city, region, countryCode, postalCode } = basics.location;
    await bot.reply(message, `I am currently based in ${city}, ${region} ${postalCode}, ${countryCode}`);
  });
}