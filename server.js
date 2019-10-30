const app = require('./reprograma_api/src/app')
const port = 3000

app.listen(port, function(){
    console.log(`app está rodando na porta ${port}`)
})
