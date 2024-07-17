const mongoose = require("mongoose")



// mongoose.connect(process.env.MONGODB_STRING)
mongoose.connect("mongodb://localhost:27017/QuickChat")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.Connection;