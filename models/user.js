const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  birthYear: Number, // Auto-calculated
}, { timestamps: true });

// Hook to calculate birthYear
userSchema.pre('save', function (next) {
  const currentYear = new Date().getFullYear();
  this.birthYear = currentYear - this.age;
  next();
});

module.exports = mongoose.model('User', userSchema);
