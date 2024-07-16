const jwt = require("jsonwebtoken");
const UserController = require('../Controller/UserController')
const { promisify } = require('util');

function verifyUserPermission(...requiredPermissions) {
  return async (req, res, next) => {
    try {
      const authToken = req.cookies.token;
      if (!authToken) {
        return res.status(401).json({
          error: true,
          code: 130,
          message: "The authentication token doesn't exist",
        });
      }

      const decodedToken = await promisify(jwt.verify)(authToken, process.env.SECRET);
      req.user_id = decodedToken.id;

      const user = await UserController.getUserById(req.user_id);

      if (!user) {
        return res.status(401).json({
          error: true,
          code: 130,
          message: "Users don't exist",
        });
      }

      if (requiredPermissions.includes(user.permission_type)) {
        next();
      } else {
        res.status(403).json({ error: 'Access denied: Insufficient permission' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error checking permissions' });
    }
  };
}


module.exports = {
    verifyUserPermission,
};
