const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Task')
    .then(()=>{
        console.log("Connection establisted Successful...");
    }).catch((err)=>{
        console.err(err);;
        console.log("Something went wrong");
    })