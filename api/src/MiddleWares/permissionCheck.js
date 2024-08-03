const jwt = require("jsonwebtoken");
const UserController = require('../controller/UserController')
const { promisify } = require('util');

function verifyUserPermission(...requiredPermissions) {
  return async (req, res, next) => {
    try {
      const authToken = req.cookies.token;
      if (!authToken) {
        return res.status(401).json({
          fail: true,
          message: "The authentication token doesn't exist",
        });
      }

      const decodedToken = await promisify(jwt.verify)(authToken, process.env.SECRET);
      req.user_id = decodedToken.id;

      const user = await UserController.getUserById(req.user_id);

      if (!user) {
        return res.status(401).json({
          fail: true,
          message: "Users don't exist",
        });
      }

      if (requiredPermissions.includes(user.permission)) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied: Insufficient permission', fail: true});
      }
    } catch (error) {
      console.error('Error checking permissions' , error);
      res.status(500).json({ fail: true });
    }
  };
}


module.exports = {
    verifyUserPermission,
};
