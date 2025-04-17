const ProductModel = require('../models/productModel');

//get all porducts API - GET /api/v1/products
exports.getProducts = async(req, res, next) => {

    const products = await ProductModel.find({});
    res.json({
        success: true,
        products
    })
}

//get single product API - GET /api/v1/product/:id
exports.getSingleProducts = async(req, res, next) => {

    try{
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })

    }   catch(error){
            res.status(404).json({
                success: false,
                message: "Unable to get product with the Id!"
            })
    }
    
}