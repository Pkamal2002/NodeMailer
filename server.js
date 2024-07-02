const express = require('express');
const appRoute = require('./routes/routes.js')

const app = express();
const PORT=8001

app.use(express.json());


//routes//
app.use('/api',appRoute)

app.listen(PORT,()=>{
    console.log(`Server is started..${PORT}`)
})