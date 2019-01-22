/*
  A class for connecting to and controlling the postgres database of an iredmail
  email server.
*/

'use strict'

const Sequelize = require('sequelize')
const config = require('../config')

// Models
const UsedQuota = require('../postgres/models/used-quota')
const Mailbox = require('../postgres/models/mailbox')

class IRedMail {
  constructor () {
    // Instantiate and initialize sequelize.
    this.sequelize = this.initSequelize()

    // Load the models
    this.models = {
      usedQuota: new UsedQuota(this.sequelize),
      mailbox: new Mailbox(this.sequelize)
    }
  }

  // Returns an instance of the sequelize class, configured for the Postgres
  // database defined in the config object.
  initSequelize () {
    return new Sequelize('vmail', config.postgresUser, config.postgresPass, {
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
  }
}

module.exports = IRedMail
