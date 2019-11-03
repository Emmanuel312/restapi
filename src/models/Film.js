const { Model,DataTypes } = require('sequelize')

class Film extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            horario: DataTypes.DATE,
            genero: DataTypes.STRING
        },{ sequelize,tableName: 'sala' })
    }

    static associate(models)
    {
        this.belongsTo(models.Sala, { foreignKey: 'sala_id', as: 'sala' })
    }
}


module.exports = Film