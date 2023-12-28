require('dotenv').config()


const express=require('express');
const app=express();
const port=process.env.port || 3000
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Routess

const bookStoreRoutes=require('./routes/storeRoutes');
const adminRoutes=require('./routes/adminRoutes');



// routes

app.use(bookStoreRoutes);
app.use(adminRoutes);


// setting up the middle wares


app.listen(port,()=>{
    console.log(`server connected on port :${port}`);
});

app.get('/',(req,res,next)=>{
    res.send('<h1>The server is working</h1>')
})

