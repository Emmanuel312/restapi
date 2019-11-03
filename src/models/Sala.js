const { Model,DataTypes } = require('sequelize')

class Sala extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            deskAmount: DataTypes.NUMBER,
            numSala: DataTypes.STRING
        },{ sequelize,tableName: 'sala' })
    }
}


module.exports = Sala