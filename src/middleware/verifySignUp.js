const userModel = require('../models/user.model');

checkDuplicateEmail = async (req, res, next) => {
  // Email
  await userModel.findOne({email : req.body.email}).then(user => {
    if (user) {
      res.status(400).send({message: "Failed! Email is already in use!"});
      return;
    }
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  // if (req.body.roles) {
  //   for (let i = 0; i < req.body.roles.length; i++) {
  //     if (!ROLES.includes(req.body.roles[i])) {
  //       res.status(400).send({
  //         message: "Failed! Role does not exist = " + req.body.roles[i]
  //       });
  //       return;
  //     }
  //   }
  // }
  
  next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
