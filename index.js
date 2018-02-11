const { Composer, Markup } = require('micro-bot')

const { Chuck, messages } = require('./lib')

const app = new Composer()

app.command('start', ({ botInfo, replyWithMarkdown, update }) =>
  replyWithMarkdown(
    messages.start(botInfo, update),
    Markup.keyboard(['Tell me something funny Chuck'])
      .resize()
      .extra()
  )
)

app.hears('Tell me something funny Chuck', async ({ replyWithMarkdown }) => {
  const joke = await Chuck.fetchRandomJoke()
  replyWithMarkdown(joke)
})

module.exports = app
