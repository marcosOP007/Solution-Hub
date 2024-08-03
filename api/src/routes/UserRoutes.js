const {Router} = require('express');
const path = require('path');
const UserController = require('../controller/UserController')
const User = require('../models/user');
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const permissionCheck = require('../MiddleWares/permissionCheck');

const router = Router();

router.post('/login', async (req, res) => {
  
  console.log("receive in login")
  const { email, password } = req.body;

  
  if (!email || !password) {
    return res.status(422).json({ msg: "requisição invalida", fail: true });
  }

  const user = await UserController.getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ msg: "Login/password invalido", fail: true });
  }
      
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Login/password invalido", fail: true });
  }
  
  try {
    const secret = process.env.SECRET;

    const token = jwt.sign({id: user.id}, secret, {expiresIn: '1h'});
    res.cookie("token", token, {
      httpOnly: true,
    });

    
    return res.status(200).json({message: 'login sucess', fail: false});
    
    
  } catch (e) {
    console.error('error lo')
    res.status(500).json({ msg: 'Erro no Servidor, tente mais tarde!!' });
  }

})


router.post('/logout', async (req,res) => {
  try{
    res.clearCookie('token', {path:'/'})

    res.status(200).json({mensage: 'token removed'});
  }catch(err){
    console.log(err)
  }
})


router.post('/register', async (req, res, next) => {
  const {name, email, password} = req.body;
  
  console.log(email)
  
  if(!name || !email || !password) {
      return res.status(422).json({msg : 'entradas invalidas', fail: true})
  }

  const userExists = await UserController.getUserByEmail(email);

  if (userExists) {
    return res.status(300).json({messege: 'User exist'})    
  }


  try{
      console.log("here")
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);


      User.create({name: name, email: email, password: passwordHash})

      return res.status(200).json({message: "create success", fail: false});
  }catch(error){
      console.log("Erro no login de User: ", error, error.message);
      
      res.status(500).json({ msg: 'error no servidor, tente mais tarde novamente!' });
  }
  

}),



router.post('/deleted',permissionCheck.verifyUserPermission("ADMIN"), async (req, res, next) => {
  
  try{
      await UserController.deleteUser(req.params.id)

      return res.status(200).json({mensage: 'Success deleted user'})
  }catch(error){
      console.log("Erro ao deletar moderador: ", error, error.message);
      
      res.status(500).json({ msg: 'error no servidor, tente mais tarde novamente!' });
  }
  


}),
module.exports = router;


