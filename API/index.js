var express = require('express')
var cors = require('cors')

var app = express()
app.use(cors())

//Para la utilidad body-parser
var bp = require('body-parser')
app.use(bp.json())


function inicializarLista() {
    var l = new Map()
    l.set(1, {id:1, nombre:"patatas"})
    l.set(2, {id:2, nombre:"cerveza"})
    return l
}


var lista = inicializarLista()
var idActual = 3;


app.get('/api/items', function(pet, resp){
    var array = [];
    lista.forEach(function(valor){
        array.push(valor)
    })
    resp.send(array)
})

app.get('/api/items/:id', function(pet,resp){
    var id = parseInt(pet.params.id)
    if (isNaN(id)) {
        resp.status(400);
        resp.end();
    }
    else {
        var item = lista.get(id)
        if (item==undefined) {
            resp.status(404)
            resp.send('No existe el item con id ' + id);
        }
        else
            resp.send(item);
    }
})

app.post('/api/items', function(pet, resp) {
    var nuevo = pet.body
    if (nuevo.nombre) {
        var creado = {
             id: idActual,
             nombre: nuevo.nombre,
             comprado: false
        }
        lista.set(idActual,creado)
        idActual++
        resp.status(201)
        //Fundamentalismo REST
        resp.header('Location','http://localhost:3000/api/items/'+creado.id)
        //En la práctica muchos APIs devuelven el objeto creado, incluyendo id
        resp.send(creado)
    }
    else {
        resp.status(400)
        resp.send("el objeto no tiene los campos adecuados")
    }
})

//Podéis probar esto con
//curl -X DELETE -v http://localhost:3000/api/items/1
app.delete('/api/items/:id', function(pet, resp){
    var id = parseInt(pet.params.id)
    if (isNaN(id)) {
        resp.status(400);
        resp.end();
    }
    else {
        var item = lista.get(id)
        if (item==undefined) {
            resp.status(404)
            resp.send('No existe el item con id ' + id);
        }
        else{
            lista.delete(id);
            resp.end();
        }
    }
})


//Esto no es parte del API, pero nos permite reiniciar la lista de modo sencillo
app.get('/api/restart', function(pet, resp) {
   lista = inicializarLista()
   resp.send("Lista reiniciada")
})


app.get('*', function(pet, resp){
    resp.send('Prueba a acceder a la lista de items en /api/items')
})



app.listen(3000,function(){
    console.log('Marchando el servidor por el puerto 3000...')
})