'use strict';

module.exports =
{
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.createTable('sala',
        { 
            id:
            {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            deskAmount: Sequelize.INTEGER,
            numSala: Sequelize.STRING,
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
        return queryInterface.dropTable('sala')
    }
}
