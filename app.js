const express = require('express');
const { User } = require('./models');  // Import the User model

const app = express();
const port = 3000;

app.use(express.json());

// Define a route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});