const express= require ('express')
const routes = express.Router()
const {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}= require('../controllers/productController')
const userCtr=require('../controllers/userController')
const prodCtr=require('../controllers/productController')
const verifyToken=require('./verifyToken')
const multer = require('multer')
const path = require('path')

//---------------------storage----------------------
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }

})

const upload = multer({storage:Storage})
//-------------------user----------------------------
routes.post('/register',userCtr.register)
routes.post('/login',userCtr.login)
routes.get('/test',verifyToken,userCtr.test)

routes.route('/products').get(getAllProducts)
routes.route('/products/:idproduct').get(getProductById)
routes.post('/addproduct',upload.single('pic'),prodCtr.addProduct)
routes.route('/update/:idproduct').patch(updateProduct)
routes.route('/delete/:idproduit').delete(verifyToken,deleteProduct)

module.exports= routes
