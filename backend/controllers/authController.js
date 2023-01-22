const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ 'message': 'Email and password are required.' });
  const foundUser = usersDB.users.find(person => person.email === email);
  if (!foundUser) return res.sendStatus(401); //Unauthorized 
  // evaluate password 
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
      // create JWTs
      res.json({ 'success': `User ${email} is logged in!` });
  } else {
      res.sendStatus(401);
  }
}

module.exports = { handleLogin };