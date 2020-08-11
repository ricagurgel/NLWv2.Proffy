//servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages.js')


const nunjucks = require('nunjucks')
nunjucks.configure('src/views/', {
      express: server,
      noCache: true
})


server
//configurar pasta estática

.use(express.urlencoded({extended: true})) // habilitar o req.body

.use(express.static("public"))
//configurar rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses )
.post("/saveclass", saveClasses)
//abrir servidor na porta 5000
.listen(5000)
console.log('listen port: 5000 ')