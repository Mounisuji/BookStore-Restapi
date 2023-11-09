const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./src/config/db")
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

//connect to MongoDB
connectDB();

//middleware
app.use(bodyParser.json());

//use book routes
app.use('/books', bookRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
