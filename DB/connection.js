const mongoose = require("mongoose");
const connection_String=process.env.connection_String
mongoose.connect(connection_String).then(()=>{
   console.log("connected to database");
}).catch((err)=>{
    return err
})
