const express = require('express')
const routes = require('./routes')
const app = express()

require('./database')

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('server on port 3000'))