var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) {
    return(`<tr>
              <td><em>${elem.mesa}</em></td>
              <td><em>${elem.nombre}</em></td>
              <td><em>${elem.pedido}</em></td>
            </tr>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    nombre: document.getElementById('nombre').value,
    mesa: document.getElementById('mesa').value,
    pedido: document.getElementById('pedido').value
  };

  socket.emit('new-message', message);
  return false;
}
