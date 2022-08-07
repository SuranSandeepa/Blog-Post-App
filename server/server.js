const express = require('express');
const mongoose = require('mongoose'); // mongoose through, communicate with database
const bodyParser = require('body-parser'); //convert json to javascript object
const cors = require('cors'); //cors is a node pakage for providing a Connect/Express middleware that can be used to enable CORS with various options.

const app = express(); //invoke express

//imports routes
const postRoutes = require("./routes/posts");

//app middleware
app.use(bodyParser.json()); 
app.use(cors()); 

//route middleware
app.use(postRoutes);


const PORT = 8000;

const DB_URL =
    "mongodb+srv://SuranSandeepa:sandeepa140812@mernapp.3ak3uf6.mongodb.net/mernCrud?retryWrites=true&w=majority";
  
mongoose.connect(DB_URL,).then(() => { 
    console.log("Database connected!");
}).catch((err) => { 
    console.log("Error with DB connecting!", err.message);
})

//Application එක listen කරනවා මේ port එකේ තමයි run වෙන්නේ කියලා
app.listen(PORT, () => { 
    console.log(`App is running on ${PORT}`);
}) 