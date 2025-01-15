
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const carRoutes = require('./Routes/carRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);

app.get("/",(req,res)=>{
    res.send("API is running...")  // this will return "API is running..." when the server is running.  This is a simple test.  In a real application, you might want to return a welcome message or some other data.  For example, you might return an array of all cars in the database.  Please replace this test response with the actual data you want to serve.  The response will depend on the data you're storing and the API you're building.  For example, if you're storing car information in a MongoDB database, you might return an array of car objects.  If you're storing car information in a PostgreSQL database, you might return a JSON object containing car data.  And so on.  The exact structure of the response will depend on the data you're storing and the API you're building.  This is just a simple example.  Please replace this test response with the actual data you want to serve.  The response will
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
