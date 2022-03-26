const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const http = require('http')

mongoose.connect('mongodb://localhost:27017/nnmath', { 
    useNewUrlParser: true ,
    //useCreateIndex: true ,
    useUnifiedTopology: true
    });

// create our express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(morgan('dev'));


// routes
const PORT = 3000;
http.createServer({}, app).listen(3000);
console.log(`[OK] Server started at ${PORT}`);
