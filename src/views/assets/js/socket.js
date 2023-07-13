const socket = io.connect("https://botlist.teamarcades.xyz/");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })