const socket = io();

const render = (data) => {
  const html = data.map((pr) => `
       <tr>
        <th class="tr">${pr.name}</th>
        <td class="tr">$${pr.price}</td>
        <td class="tr">${pr.description}</td>
      </tr>
    `).join(' ');
  document.querySelector('#products').innerHTML = html;
};

socket.on('dataproducts', (data) => {
  console.log(data);
  render(data);
});
