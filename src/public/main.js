const socket = io()

socket.on('dataproducts', (data) => {
  console.log(data)
  render(data)
})


const render = (data) => {
  const html = data.map((pr) => {
    return `
       <tr>
        <th class="tr">${pr.name}</th>
        <td class="tr">$${pr.price}</td>
        <td class="tr">${pr.description}</td>
      </tr>
    `
  }).join(' ')
  document.querySelector('#products').innerHTML = html
}
