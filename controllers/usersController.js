const { User, Thought } = require("../models");

const usersController = {
   getAllUsers: function(req, res) {
      User.find({})
         .then(usersData => res.json(usersData))
         .catch((err) => {
            console.log(err);
            res.sendStatus(400);
         });
   },

   addNewUser: function( { body }, res ) {
      User.create(body)
         .then(userData => res.json(userData))
         .catch(err => res.json(err));
   }
};

module.exports = usersController;
