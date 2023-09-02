const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
const {passEncrypt} = require('../config/cryptojsfun');
const User = require('../models/User');


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


router.delete('/:id', verifyTokenAndAuthorization , async(req, res)=>{
     try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User Has Been Removed");
     } catch (error) {
          res.status(500).json(error);
     }
})

router.get('/:id', verifyTokenAndAdmin , async(req, res)=>{
     try {
          const user = await User.findById(req.params.id);
          res.status(200).json(user);
     } catch (error) {
          res.status(500).json(error);
     }
})

module.exports = router;