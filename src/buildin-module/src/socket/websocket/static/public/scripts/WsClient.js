var ws = new WebSocket('ws://localhost:9000/')

ws.onopen = () => {
  ws.send('大家好!')
}

// ws.onmessage = (msg) => {
//   const content = document.getElementById('content')
//   content.innerHTML += msg.data + '<br/>'
// }

ws.onmessage = (msg) => {
    console.log('13', msg)
    const content = document.getElementById('content')
    content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}