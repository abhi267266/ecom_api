
const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const Product = require('../models/Product');

//Create

router.post('/', verifyTokenAndAdmin,async (req, res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json(err);
    }
});


//get all the products

router.get('/', async (req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qNum = req.query.num;
     try {
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(qNum || 5);
        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in:[qCategory],
                }
            });
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);
     } catch (error) {
          res.status(500).json(error);
     }
})

module.exports = router;

//1:30:56