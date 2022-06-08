import {saveProducts} from './socket.js'

const productsList = document.querySelector('#products').innerHTML = html

export const renderProducts = products => {
  products.map(pr => {
      productsList.innerHTML += `
    <h1>
      ${pr.name}
      ${pr.price}
    </h1>
  `
  })
}



export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveProducts(
    productsFrom['name'].value,
    productsFrom['description'].value,
    productsFrom['price'].value,
    productsFrom['image'].value,
  );
};

