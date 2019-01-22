// Attempt to include a common.js config file, if it exists.
let common
try {
  common = require('./env/common')
} catch (err) {}

// Default to development environment.
const env = process.env.NODE_ENV || 'development'

// Load the config object for the selected environment.
const config = require(`./env/${env}`)

// Merge into a single object and export.
module.exports = Object.assign({}, common, config)
