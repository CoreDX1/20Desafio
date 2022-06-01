const socket = io()

socket.on('dataproducts', (data) => {
  console.log(data)
})
