const { Router } = require('express')
const salaController = require('./controllers/salaController')
const FilmController = require('./controllers/FilmController')
const routes = Router()

// crud de salas

routes.post('/salas', salaController.store)
routes.get('/salas', salaController.index)
routes.get('/salas/:id', salaController.show)
routes.put('/salas/:id', salaController.update)
routes.delete('/salas/:id', salaController.delete)

// crud dos filmes

routes.post('/salas/:sala_id/films', FilmController.store) // criar um filme
routes.get('/salas/:sala_id/films', FilmController.index)


module.exports = routes