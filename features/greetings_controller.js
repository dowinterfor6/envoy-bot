module.exports = (controller) => {
  controller.hears('.*', 'greeting', async (bot, message) => {
    await bot.reply(message, 'Hi! I am currently open to new job opportunites, but not actively looking.');
    await bot.reply(message, 'Feel free to ask me about anything to get to know me better!');
    // TODO: quick links?
    // TODO: tips/hints
  });

  // TODO: respond to hello/hi/hey?
}