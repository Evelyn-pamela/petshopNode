const http = require("http")
const petShop = require("./petshop")

const server = http.createServer(function(req, res){
    if(req.url == "/listaspet"){
        let resultado = petShop.listasPets();

        return res.end(resultado);
     }
    res.setHeader("Content-Type","text/html;charset=utf8")
    res.end("Voce está no sisteminha")
})

server.listen(3030, 'localhost')

