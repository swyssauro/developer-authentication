const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('email existente...');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user =  new User ({
        nome: req.body.nome,
        email: req.body.email,
        password: hashedPassword
    });
    try {
      const saveUser =  await user.save();
    res.send({ user: user._id });
    } catch (err) {
    res.status(400).send(err);
    }
}); 

router.post('/login', (req, res) => {
      
});


module.exports =  router;


