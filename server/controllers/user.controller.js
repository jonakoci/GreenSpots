const User = require('../model/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find() 
         .then((allUsers) =>{res.json({points: allUsers })})
         .catch ((err) => {res.json({ message: "Something went wrong", error: err})});
}


module.exports.getUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.createUser = (request, response) => {
    const { title } = request.body;
    User.exists({ title })
      .then(titleExists => {
        if (titleExists) {
          return Promise.reject({ errors: { title: { message: 'This point already exists' } } });
        } else {
          return User.create(request.body);
        }
      })
      .then(user => response.json(user))
      .catch(err => response.json(err));
  };
  

  module.exports.updateUser = (request, response) => {
    const userId = request.params.id;
    const updatedUser = request.body;
    
    if (updatedUser.title) {
        User.find({ title: updatedUser.title, _id: { $ne: userId } })
            .then(titleExists => {
                if (titleExists.length > 0) {
                    return Promise.reject({ errors: { title: { message: 'This point already exists' } } });
                } else {
                    User.findOneAndUpdate({ _id: userId }, updatedUser, { new: true })
                        .then(updatedUser => response.json(updatedUser))
                        .catch(err => response.json(err));
                }
            })
            .catch(err => response.json(err));
    } else {
        User.findOneAndUpdate({ _id: userId }, updatedUser, { new: true })
            .then(updatedUser => response.json(updatedUser))
            .catch(err => response.json(err));
    }
};


module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}