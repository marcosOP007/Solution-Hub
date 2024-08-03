const jwt = require("jsonwebtoken");
const UserController = require('../controller/UserController')


const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const auth = req.cookies.token;

  if(!auth){
    return res.status(401).json({
      fail: true,
      message: "The authentication token doesn't exist"
    })
  }

  try {
    const decoded = await promisify(jwt.verify)(auth, process.env.SECRET);

    if(!decoded){
      return res.status(401).json({
        fail: true,
        message: "O token está expirado!"
      })
    } else {
      req.user_id = decoded.id;

      if(req.params.id != req.user_id){
         return res.status(401).json({
           fail: true,
           message: "Acesso negado!"
         })
      }

      
      
      next();
    }
    
  } catch {
    return res.status(401).json({
      fail: true,
      message: "O token está inválido!"
    })
  }

}