/*
  Forwardings table in the iRedMail postgres database.

  The constructor cxpects an instantiation of the sequalize class. Returns a
  Sequelize model.
*/

'use strict'

const Sequelize = require('sequelize')

class Forwardings {
  // Expects an instantiation of the sequalize class. Returns a Sequelize model.
  constructor (sequelize) {
    return sequelize.define(
      'forwardings',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        address: Sequelize.STRING,
        forwarding: Sequelize.STRING,
        domain: Sequelize.STRING,
        dest_domain: Sequelize.STRING,
        is_maillist: Sequelize.INTEGER,
        is_list: Sequelize.INTEGER,
        is_forwarding: Sequelize.INTEGER,
        is_alias: Sequelize.INTEGER,
        active: Sequelize.INTEGER
      },
      {
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
        // define the table's name
        tableName: 'forwardings'
      }
    )
  }
}

module.exports = Forwardings
