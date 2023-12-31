const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();
const Cart = require('../models/Cart');

//CREATE

router.post('/', verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body);

    try {
       
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
        
    } catch (err) {
        res.status(500).json(err);
    }

});

//UPDATE

router.put('/:id', verifyTokenAndAuthorization , async (req, res)=>{
    
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
    
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE

router.delete('/:id', verifyTokenAndAuthorization, async (req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Product from the cart is deleted');
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER CART

router.get('/find/:userId', verifyTokenAndAuthorization, async(req,res)=>{
    try {
        const cart = await Cart.findOne({userId:req.params.userId});

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(err);
    }
})

//GET ALL CARTS(ADMIN)  

router.get('/', verifyTokenAndAdmin,async(req, res)=>{
    try {
        const allCart = await Cart.find();
        res.status(200).json(allCart);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;