

document.addEventListener('DOMContentLoaded', () => {
  console.log('In window chat!!!!!');
  const csrftoken = document.cookie.split('=')[1];
  console.log(`${csrftoken}`);

  let instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        "X-CSRFToken": csrftoken,
        
    }
    });


  instance.get('messages')
    .then(function(response){
        console.log('@@@@@@@@@@@@');
        console.log(response);

    })
    .catch(function (error){

        console.error(error);
    });
});