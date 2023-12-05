require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const usersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const permissionsController = require('./controllers/permissionsController');
const moviesController = require('./controllers/moviesController');
const subscriptionsController = require('./controllers/subscriptionsController')
const membersController = require('./controllers/membersController')

const autoController = require('./controllers/autoController')
const port = process.env.PORT || 5000;
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

//require('./configs/database');

app.use('/api/users', usersController);
app.use('/api/login', loginController);
app.use('/api/permissions', permissionsController);
app.use('/api/movies', moviesController);
app.use('/api/subscriptions', subscriptionsController);
app.use('/api/members', membersController);

app.use('/api/autocomplete', autoController);

// mongoose.connect(process.env.MONG_URI)
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             console.log("connect to db & running on port 8000");
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })


const connectDatabase = require("./configs/db");

// Call the connectDatabase function and pass the startServer function as a callback
connectDatabase((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        // Database connection successful, start the server
        startServer();
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

