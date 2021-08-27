var User = require('../models/usersModel');

module.exports.editUser = (req, res) => {
    User.findByUsername(req.params.id, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(404).send('user doesnt exist with this Id.');
        let _id = user._id;
        var updatedUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        };
        User.findByIdAndUpdate(_id, updatedUser, (err) => {
            if (err) throw err;
            res.status(200).send('user updated successfully');
            // res.redirect("/products-listing");
        });
    });
};