// const User = require('../../models/users')

const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

async function createUser (ctx) {
  ctx.body = {}
}

/*
  Create a new user by manipulating the postgres database.
*/
async function getUsers (ctx) {
  try {
    // Sync the model.
    // const model = await ctx.iRedMail.models.usedQuota.sync()
    const model = await ctx.iRedMail.models.mailbox.sync()
    // const model = await ctx.iRedMail.models.forwardings.sync()

    // Get every model in the database.
    const data = await model.findAll()

    // Get just the user name.
    const users = data.map(x => x.username)

    ctx.body = users
  } catch (err) {
    console.log(`Error in iredmail.createUser(): `, err)
    ctx.throw(500, err.message)
  }
/*
  const user = new User(ctx.request.body.user)
  try {
    await user.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }

  const token = user.generateToken()
  const response = user.toJSON()

  delete response.password

  ctx.body = {
    user: response,
    token
  }
  */
}

module.exports = {
  createUser,
  getUsers
}
