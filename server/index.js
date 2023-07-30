const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware to allow requests from all origins (you can restrict it to specific origins in production)
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, // Make sure this line is present
  }).then(() => {
  console.log('Connected to MongoDB database');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const User = require('./models/user'); // Add this line to import the User model

app.post('/register', async (req, res) => {
  const formData = req.body;

  // Check if the email or phone already exists in the database
  const existingUser = await User.findOne({
    $or: [{ email: formData.email }, { phone: formData.phone }],
  });

  if (existingUser) {
    return res.status(409).json({ error: 'Email or phone number already registered' });
  }

  // Create a new user using the User model and save it to the database
  const newUser = new User(formData);
  try {
    await newUser.save();
    console.log('New user saved to the database:', newUser);
    return res.status(200).json({ message: 'User registration successful!' });
  } catch (error) {
    console.error('Error saving user to the database:', error);
    return res.status(500).json({ error: 'An error occurred during registration. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
