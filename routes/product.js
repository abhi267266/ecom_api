
const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const {passEncrypt} = require('../config/cryptojsfun');
const Product = require('../models/Product');

//Create

router.post('/', verifyTokenAndAdmin,async (req, res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err);
    }
})


// router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
//    if(req.body.password){
//         req.body.password = passEncrypt(req.body.password);
//    }

//    try {

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, {new:true});

//     res.status(200).json(updatedUser)

//    } catch (err) {
//         res.status(304).json(err);
//    }
// });


// router.delete('/:id', verifyTokenAndAuthorization , async(req, res)=>{
//      try {
//           await User.findByIdAndDelete(req.params.id);
//           res.status(200).json("User Has Been Removed");
//      } catch (error) {
//           res.status(500).json(error);
//      }
// })

// router.get('/find/:id', verifyTokenAndAdmin , async(req, res)=>{
//      try {
//           const user = await User.findById(req.params.id);
//           const {password, ...others} = user._doc;

//           res.status(200).json(others);
//      } catch (error) {
//           res.status(500).json(error);
//      }
// })

// //get all the users

// router.get('/', verifyTokenAndAdmin, async (req, res)=>{
//      try {
//           const query = req.query.lim;

//           const user = query ? await User.find().sort({_id: -1}).limit(query) : await User.find();
//           res.status(200).json(user);
//      } catch (error) {
//           res.status(500).json(error);
//      }
// })

// //Get user stats

// router.get('/stats', verifyTokenAndAdmin, async (req, res)=>{
//      const date = new Date();
//      const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//      console.log(lastYear);

//      try {

//           const data = await User.aggregate([
//                {$match: {createdAt :{ $gte : lastYear}}},
//                {$project: {
//                     month:{$month : "$createdAt"},
//                }},
//                {
//                     $group: {
//                          _id:'$month',
//                          total:{$sum: 1}
//                     }
//                }

//           ]);

//           res.status(200).json(data);
          
//      } catch (err) {
//           res.status(500).json(err);
//      }
// });




module.exports = router;