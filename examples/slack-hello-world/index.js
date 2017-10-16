const { SlackBot } = require('toolbot-core-experiment');
const { createServer } = require('toolbot-core-experiment/express');

const bot = new SlackBot({
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
