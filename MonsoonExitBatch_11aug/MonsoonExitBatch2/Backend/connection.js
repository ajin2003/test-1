const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://ajinsanthoshb21ec1113:Ajinabia@cluster0.kitgcnl.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
