const express = require('express');
// const connectDB = require('../config/db');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8082;
const cors = require('cors');

const app = express();



const corsOptions = {
    origin: ['http://localhost:3000','https://askmegpt.netlify.app'], // Replace with the actual URL of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies and queryorization headers
};

app.use(cors(corsOptions));


// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



// Routes
const queryRoutes = require('./modules/query/routes/queryRoutes');
const { successResponse } = require('../constants/constants');

app.use('/', queryRoutes);
// app.get('/', (req,res)=>{
//     console.log("yoy");
//     return successResponse;
// })
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));