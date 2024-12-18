require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

//Routes
app.use('/api/v1/company', require('./routes/companyRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/companyUser', require('./routes/companyUserRoutes'));

const PORT = process.env.SERVER_PORT;
app.listen(PORT,()=>{
    console.log(`Connected to port: ${PORT}`);
})