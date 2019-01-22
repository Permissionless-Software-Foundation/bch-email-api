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
    // console.log(`ctx.iRedMail: ${util.inspect(ctx.iRedMail)}`)

    // Sync the model.
    // const model = await ctx.iRedMail.models.usedQuota.sync()
    const model = await ctx.iRedMail.models.mailbox.sync()

    const data = await model.findAll()

    ctx.body = data
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
