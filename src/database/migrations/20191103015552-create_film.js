'use strict';

module.exports =
{
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.createTable('film',
        { 
            id:
            {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            horario: Sequelize.DATE,
			genero: Sequelize.STRING,
			sala_id:
			{
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model : 'sala', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
            createdAt:
            {
              type: Sequelize.DATE,
              allowNull: false,
            },
            updatedAt:
            {
              type: Sequelize.DATE,
              allowNull: false,
            }
        })
        
    },

    down: (queryInterface, Sequelize) =>
    {
        return queryInterface.dropTable('film')
    }
}
