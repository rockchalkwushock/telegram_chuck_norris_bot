module.exports = {
  start: (bot, user) => `
  Hello ${user.message.from.first_name}, I'm ${
    bot.first_name
  }! My job is to make you laugh!
`
}
