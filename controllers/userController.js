const User = require('../models/user');

// 👉 Create User (POST /api/users)
const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Email domain restriction
    if (!email.endsWith('@gmail.com')) {
      return res.status(400).json({ error: 'Only Gmail addresses are allowed.' });
    }

    // User.create will trigger the pre-save hook that calculates birthYear
    const user = await User.create({ name, email, age });

    res.status(201).json(user); // 201: Created
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// 👉 Get All Users (GET /api/users)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get User by ID (GET /api/users/:id)
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 👉 Update User (PUT /api/users/:id)
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 👉 Delete User (DELETE /api/users/:id)
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
