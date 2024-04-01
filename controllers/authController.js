const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

// Controller for loggin in
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send({ message: 'User not found!' });
    }



    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({ message: 'Wrong pass' });
    }


    const payload = {
      userId: user.id,
      username: user.username
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(200).send({
      message: 'auth successful!!!',
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};


//Controller for user registration & authorize after successful registration
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send({ message: 'User Already Created' });
    }
    const hashedPassword = bcrypt.hashSync(password, 8);


    const newUser = await User.create({
      username,
      password: hashedPassword
    });
    const payload = {
      userId: newUser.id,
      username: newUser.username
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(201).send({
      message: 'User registered successfully!!!',
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};
