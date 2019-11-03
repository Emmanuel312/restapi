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

    static associate(models)
    {
        this.hasMany(models.Film, { foreignKey: 'sala_id', as: 'films' })
    }
}


module.exports = Sala