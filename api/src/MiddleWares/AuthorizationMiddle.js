'use strict';

const jwt = require("jsonwebtoken");
const UserController = require('../Controller/UserController')


const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const auth = req.cookies.token;

  if(!auth){
    return res.status(401).json({
      error: true,
      code: 130,
      message: "The authentication token doesn't exist"
    })
  }

  const [, token] = auth.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(auth, process.env.SECRET);

    if(!decoded){
      return res.status(401).json({
        error: true,
        code: 130,
        message: "The token is expired"
      })
    } else {
      req.user_id = decoded.id;

      user = await UserController.getUserById(req.user_id);

      if(!user){
        return res.status(401).json({
            error: true,
            code: 130,
            message: "Users don't exist"
        })
      }
   
      if(user.permission_type === "USER"){
        return res.status(401).json({
            error: true,
            code: 130,
            message: "User does not have the necessary permissions"
        })
      }
      
      next();
    }
    
  } catch {
    return res.status(401).json({
      error: true,
      code: 130,
      message: 'The token is invalid'
    })
  }

}