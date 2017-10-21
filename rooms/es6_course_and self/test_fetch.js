require('es6-promise').polyfill();
require('isomorphic-fetch');
 
fetch('http://127.0.0.1:8000/room')
  .then(function(response) {
//    console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
//    console.log(response.status); // 200
//    console.log(response);
    return response.json();
   })
  .then(response => {
    const itemsArray = readRooms(response);
    
    console.log(itemsArray);
  })
  .catch(err => {
  	console.log(err);
  })
  console.log('+++++')

function readRooms(items){
	console.log();
	const rooms = Array.from(items);
	return rooms.map(room => `<span>${room.name}</span>`.split(' '))
}
