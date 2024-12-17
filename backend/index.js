require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors);

//Routes
app.use('/api/v1/company', require('./routes/customerRoutes'));

const PORT = process.env.SERVER_PORT;
app.listen(PORT,()=>{
    console.log(`Connected to port: ${PORT}`);
})