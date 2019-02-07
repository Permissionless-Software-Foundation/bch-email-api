// const ensureUser = require('../../middleware/validators')
const iredmail = require('./controller')

module.exports.baseUrl = '/iredmail'

module.exports.routes = [
  {
    method: 'POST',
    route: '/adduser',
    handlers: [
      iredmail.createUser
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      iredmail.getUsers
    ]
  }
]
