import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware to parse JSON

app.use(express.json());

// Middleware to handle CORS
app.use(cors());

// Define the routes
// Error message i got :
// When you use app.use('/book', bookRoute) in index.js, you are telling Express that all routes defined in bookRoute should be prefixed with /book.
// Therefore, within book.route.js, you only need to define the endpoints relative to that base path.

app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, (err) => {
  if (err) {
    return console.error(`Error starting server on port ${PORT}: `, err);
  }
  console.log(`Server listening on port ${PORT}`);
});
