import loadProducts from './socket.js';
import {onHandleSubmit, renderProducts} from './ui.js';

loadProducts(renderProducts);

const productsFrom = document.querySelector('#productsFrom');

productsFrom.addEventListener('submit', onHandleSubmit);
