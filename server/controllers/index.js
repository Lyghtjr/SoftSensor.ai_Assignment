const axios = require('axios')


const getAllProducts = async(req, res) =>{
    try{
        const page = req.query.page
        const limit = req.query.limit
        const startIndex = (page-1) * limit
        const endIndex = page * limit
        const products = await axios.get("https://fakestoreapi.com/products");
        const FP = products.data
        const filteredProducts = FP.slice(startIndex, endIndex)
        res.json(filteredProducts)
    }catch(err){
        return res.status(500).json(err)
    }
}
module.exports = getAllProducts;