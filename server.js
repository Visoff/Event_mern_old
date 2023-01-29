import express from "express"
const app = express()
import cors from "cors"
app.use(cors())

app.use(function (req, res, next) {
    req.head = { ...req.headers}
    next()
})

import ws_setup from "./web_socket.js"
ws_setup(app)

import {MongoClient} from "mongodb"
var client = new MongoClient("mongodb://127.0.0.1:27017")

var cursor = undefined
client.connect().then(cur => {cursor = cur; global.CityHeroes_db = cur.db("CityHeroes"); on_mongo_connect()})

async function on_mongo_connect() {
    console.log("mongodb is connected")
}

import fs  from"fs"
import https from"https"
import http from"http"
const ssl_cert = {key: fs.readFileSync(__dirname+'/ssl/cert.key', 'utf8'), cert: fs.readFileSync(__dirname+'/ssl/cert.pem', 'utf8')}


const Vue_path = __dirname+"/dist/"

app.use(express.static(Vue_path))

app.get("/", function(req, res) {
    //res.send("send me money please!!!!!")
    res.sendFile(Vue_path+"index.html")
})



app.use(express.json())

import api_setup from "./api.js"
api_setup(app)

const https_server = https.createServer(ssl_cert, app)
const http_server = http.createServer(app)

https_server.listen(443, function() {
    console.log(`Express is running on port https`)
})

http_server.listen(80, function() {
    console.log(`Express is running on port http`)
})
