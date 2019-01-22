// const User = require('../../models/users')

/*
  Create a new user by manipulating the postgres database.
*/
async function createUser (ctx) {
  try {
    // Sync the model.
    await ctx.iRedMail.models.usedQuota.sync()

    // Get all the models in the database:
    const models = await ctx.iRedMail.usedQuota.findAll()

    console.log(`data: ${JSON.stringify(models, null, 2)}`)
    ctx.body = { models }
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
  createUser
}
