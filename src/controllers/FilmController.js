const Film = require('../models/Film')
const Sala = require('../models/Sala')

module.exports =
{
    // criar sala
    async store(req,res)
    {
        const { sala_id } = req.params
        const { horario, genero } = req.body   
        
        const sala = await Sala.findByPk(sala_id)
        
        if(!sala) return res.json({ error : 'Sala nao existe!!'})
        
        const film = await Film.create({ horario,genero,sala_id })


        return res.json(film)
    },

    // mostrar filmes de uma sala especifica
    async index(req,res)
    {
        
        try
        {
            const { sala_id } = req.params
            const sala = await Sala.findByPk(sala_id, { include: { association: 'films' }})

            if(!sala) return res.json({ error : 'Sala nao existe!!'})
    
            return res.json(sala)

        }
        catch(err)
        {
            return res.json(err)
        }


    },
    
}