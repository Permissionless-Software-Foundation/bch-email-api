/*
  mailbox table in the iRedMail postgres database.

  The constructor cxpects an instantiation of the sequalize class. Returns a
  Sequelize model.
*/

'use strict'

const Sequelize = require('sequelize')

class Mailbox {
  // Expects an instantiation of the sequalize class. Returns a Sequelize model.
  constructor (sequelize) {
    return sequelize.define(
      'mailbox',
      {
        username: { type: Sequelize.STRING, primaryKey: true },
        password: Sequelize.STRING,
        name: Sequelize.STRING,
        language: Sequelize.STRING,
        storagebasedirectory: Sequelize.STRING,
        storagenode: Sequelize.STRING,
        maildir: Sequelize.STRING,
        quota: Sequelize.BIGINT,
        domain: Sequelize.STRING,
        transport: Sequelize.STRING,
        department: Sequelize.STRING,
        rank: Sequelize.STRING,
        employeeid: Sequelize.STRING,
        isadmin: Sequelize.INTEGER,
        isglobaladmin: Sequelize.INTEGER,
        enablesmtp: Sequelize.INTEGER,
        enablesmtpsecured: Sequelize.INTEGER,
        enableimaptls: Sequelize.INTEGER,
        enabledeliver: Sequelize.INTEGER,
        enablelda: Sequelize.INTEGER,
        enablemanagesieve: Sequelize.INTEGER,
        enablemanagesievesecured: Sequelize.INTEGER,
        enablesieve: Sequelize.INTEGER,
        enablesievesecured: Sequelize.INTEGER,
        enablesievetls: Sequelize.INTEGER,
        enableinternal: Sequelize.INTEGER,
        enabledoveadm: Sequelize.INTEGER,
        'enablelib-storage': Sequelize.INTEGER,
        'enableindexer-worker': Sequelize.INTEGER,
        enablelmtp: Sequelize.INTEGER,
        enabledsync: Sequelize.INTEGER,
        enablesogo: Sequelize.INTEGER,
        allow_nets: Sequelize.STRING,
        lastlogindate: Sequelize.DATE,
        lastloginipv4: Sequelize.INET,
        lastloginprotocol: Sequelize.STRING,
        disclaimer: Sequelize.STRING,
        allowedsenders: Sequelize.STRING,
        rejectedsenders: Sequelize.STRING,
        allowedrecipients: Sequelize.STRING,
        rejectedrecipients: Sequelize.STRING,
        settings: Sequelize.STRING,
        passwordlastchange: Sequelize.DATE,
        created: Sequelize.DATE,
        modified: Sequelize.DATE,
        expired: Sequelize.DATE,
        active: Sequelize.INTEGER,
        bytes: Sequelize.BIGINT,
        messages: Sequelize.BIGINT
      },
      {
        timestamps: false
      }
    )
  }
}

module.exports = Mailbox
