

document.addEventListener('DOMContentLoaded', () => {
  console.log('In window chat!!!!!');
  
  // for auth need csrf token django
  ///const csrftoken = document.cookie.split('=')[1];
  //console.log(`${csrftoken}`);
  // Cookies.set('name', 'Andrey!!!!!!');

  const csrftoken = Cookies.get('csrftoken');
  // console.log(csrftoken);

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 500,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Vary': 'Origin',
        'Accept': 'application/json',
        'XSRF-TOKEN': csrftoken,
        'xsrfValue': csrftoken,
        // 'authorization': csrftoken,
        // 'x-csrftoken': csrftoken,
    },
    //data: {'x-csrftoken': csrftoken,},
    // withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-CSRFToken',

    });
  Cookies.set('XSRF-TOKEN', csrftoken);
  console.table(instance.headers);
  instance
    .get('/messages/')
    .then(function(response){
        console.log('@@@@@@@@@@@@');
        console.log(messagesMaker(response.data));

    })
    .catch(function (error){
        
        console.log('!!!! ERROR');
        console.error(error);
    });
});

function messagesMaker(data){
    // function create div elements for messages, input paramiter
    // is Array of messages from REST api and contain room: id, text:
    // text, url, and time stamp

    console.log(`Data input is ${data}`);
    return 'ok'
}