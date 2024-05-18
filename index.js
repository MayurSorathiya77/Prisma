const dotenv = require('dotenv/config')
const express = require('express');
const app = express();
const port = process.env.PORT || 9876;

const useRoute = require('./routes/userRoute');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/user',useRoute);
app.get('/',(req,res)=>{

    return res.send("Hello");
})


app.listen(port,()=>{console.log(`server is up on port : ${port}`)});