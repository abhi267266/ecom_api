const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
const {passEncrypt} = require('../config/cryptojsfun');

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
   if(req.body.password){
        req.body.password = passEncrypt(req.body.password);
   }

   try {

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new:true});

    res.status(200).json(updatedUser)

   } catch (err) {
        res.status(304).json(err);
   }
});

//1:05:48

module.exports = router;