// Import Botkit's core features
const { Botkit } = require('botkit');
const { BotkitCMSHelper } = require('botkit-plugin-cms');

// Import a platform-specific adapter for web.
const { WebAdapter } = require('botbuilder-adapter-web');

// Load process.env values from .env file
require('dotenv').config();

const adapter = new WebAdapter({});

const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
app.use(bodyParser.json());

let botkitConfig = {
  webhook_uri: '/api/messages',
  adapter: adapter,
  storage: null
};

const controller = new Botkit(botkitConfig);

// TODO: Currently not being used
// if (process.env.CMS_URI) {
//   controller.usePlugin(new BotkitCMSHelper({
//     uri: process.env.CMS_URI,
//     token: process.env.CMS_TOKEN,
//   }));
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

controller.webserver = app;

// Once the bot has booted up its internal services, you can use them to do stuff.
controller.ready(() => {

  // load traditional developer-created local custom feature modules
  controller.loadModules(__dirname + '/features');

  /* catch-all that uses the CMS to trigger dialogs */
  if (controller.plugins.cms) {
    controller.on('message,direct_message', async (bot, message) => {
      let results = false;
      results = await controller.plugins.cms.testTrigger(bot, message);

      if (results !== false) {
        // do not continue middleware!
        return false;
      }
    });
  }
});
