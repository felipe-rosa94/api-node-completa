const express = require('express')
const app = express()
const router = express.Router()

//metodo get
const get = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'title',
        version: '0.2'
    })
})
//adicione a rota que será chamada na URL
app.use('/', get)

//exporta o modulo app
module.exports = app
