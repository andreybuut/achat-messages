

document.addEventListener('DOMContentLoaded', () => {
  console.log('In window chat!!!!!');
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  // for auth need csrf token django
  ///const csrftoken = document.cookie.split('=')[1];
  //console.log(`${csrftoken}`);

  const csrftoken = Cookies.get('csrftoken');
  console.log(csrftoken);

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'csrftoken': csrftoken,
        'name': 'Andrey But',
        'X-CSRFToken': csrftoken,        
    }
    });


  instance.get('messages/')
    .then(function(response){
        console.log('@@@@@@@@@@@@');
        console.log(response);

    })
    .catch(function (error){
        
        console.log('dsfsfsdf');
        console.error(error);
    });
});