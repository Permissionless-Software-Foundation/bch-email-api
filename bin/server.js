const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const session = require('koa-generic-session')
const passport = require('koa-passport')
const mount = require('koa-mount')
const serve = require('koa-static')
const cors = require('kcors')
const Sequelize = require('sequelize')

const config = require('../config')
const errorMiddleware = require('../src/middleware')

async function startServer () {
  // Create a Koa instance.
  const app = new Koa()
  app.keys = [config.session]

  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  await mongoose.connect(config.database, { useNewUrlParser: true })
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.

  // MIDDLEWARE START

  app.use(convert(logger()))
  app.use(bodyParser())
  app.use(session())
  app.use(errorMiddleware())

  // Used to generate the docs.
  app.use(convert(mount('/docs', serve(`${process.cwd()}/docs`))))

  // User Authentication
  require('../config/passport')
  app.use(passport.initialize())
  app.use(passport.session())

  // Custom Middleware Modules
  const modules = require('../src/modules')
  modules(app)

  // Enable CORS for testing
  // app.use(cors({origin: '*'}))

  // MIDDLEWARE END

  // app.listen(config.port, () => {
  //  console.log(`Server started on ${config.port}`)
  // })
  await app.listen(config.port)
  console.log(`Server started on ${config.port}`)

  runTest()

  return app
}
// startServer()

async function runTest () {
  try {
    const sequelize = new Sequelize('vmail', config.postgresUser, config.postgresPass, {
      host: config.postgresHost,
      dialect: 'postgres',

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },

      // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
      operatorsAliases: false
    })

    const UsedQuota = sequelize.define(
      'used_quota',
      {
        username: { type: Sequelize.STRING, primaryKey: true },
        bytes: Sequelize.BIGINT,
        messages: Sequelize.BIGINT,
        domain: Sequelize.STRING
      },
      {
        timestamps: false
      }
    )

    await sequelize.authenticate()

    console.log('Connection has been established successfully.')

    await UsedQuota.sync()

    const data = await UsedQuota.findAll()

    console.log(`data: ${JSON.stringify(data, null, 2)}`)
  } catch (err) {
    console.log(`Error: `, err)
  }
}

// export default app
// module.exports = app
module.exports = {
  startServer
}
