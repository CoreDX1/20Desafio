const socket = io();

const dataproducts = (callback) => {
  socket.on('dataproducts', callback);
};

export const saveProducts = (name, description, price, image) => {
  socket.emit('newProducts', {
    name,
    description,
    price,
    image,
  })
}

export default dataproducts;
