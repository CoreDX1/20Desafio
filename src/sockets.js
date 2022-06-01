import Products  from './daos/products/productMongodb'

export default (io) => {
  io.on('connection', (socket) => {
    
    const emitProducts = async () => {
      const products = await Products.find()
      io.emit('dataproducts', products)
    }
    emitProducts()
  })
}
