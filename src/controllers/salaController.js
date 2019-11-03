const Sala = require('../models/Sala')

module.exports =
{
    // criar sala
    async store(req,res)
    {
        const { deskAmount, numSala } = req.body    
        const sala = await Sala.create({ deskAmount, numSala })
        
        res.json(sala)
    },
    // mostrar todas as salas
    async index(req,res)
    {
        const salas = await Sala.findAll()
        
        res.json(salas)
    },
    // mostrar todas as salas
    async show(req,res)
    {
        const { id } = req.params
        const sala = await Sala.findByPk(id)
        
        res.json(sala)
    },
    async update(req,res)
    {
        const { id } = req.params
        const { deskAmount, numSala } = req.body  
        const sala = await Sala.update({ deskAmount,numSala },{where: { id } })
        res.json(sala)
    },
    async delete(req,res)
    {
        const { id } = req.params
        await Sala.destroy({ where : {id} })
        

        res.json({ok: true})
    },
}