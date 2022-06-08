import Products from './daos/products/productMongodb';

export default (io) => {
  io.on('connection', (socket) => {
    const emitProducts = async () => {
      const products = await Products.find();
      io.emit('dataproducts', products);
    };
    emitProducts();

    socket.on('newProducts',async (data) => {
      const newProducts = new Products({
        name : data.name,
        description: data.description,
        price: data.price,
        image: data.image
      })
      const saveProducts = await newProducts.save()
      console.log(saveProducts)
    })
  });
};
