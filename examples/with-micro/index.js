const { MessengerBot } = require('toolbot-core-experiment');
const { createRequestHandler } = require('toolbot-core-experiment/micro');

const bot = new MessengerBot({
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
  appSecret: '__FILL_YOUR_SECRET_HERE__',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

module.exports = createRequestHandler(bot);
