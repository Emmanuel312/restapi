const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')
const Sala = require('../models/Sala')
const Film = require('../models/Film')

const sequelize = new Sequelize(databaseConfig)

Sala.init(sequelize)
Film.init(sequelize)

Film.associate(sequelize.models)
Sala.associate(sequelize.models)

module.exports = sequelize