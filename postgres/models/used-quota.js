/*
  UsedQuota table in the iRedMail postgres database.

  The constructor cxpects an instantiation of the sequalize class. Returns a
  Sequelize model.
*/

'use strict'

const Sequelize = require('sequelize')

class UsedQuota {
  // Expects an instantiation of the sequalize class. Returns a Sequelize model.
  constructor (sequelize) {
    return sequelize.define(
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
  }
}

module.exports = UsedQuota
