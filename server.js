const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = 4000 || process.env.port
app.use(express.json())
app.use(cors()) 

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE were connected to Mongo"))
.catch((err) => console.log("err"))

app.use(routes)

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
})

//marynaseidel
//tev7SaZXdqwsjQwK
//mongodb+srv://marynaseidel:<password>@cluster0.hnksrrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0