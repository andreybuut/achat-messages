export function mega() {
    // enter function to costumize some outpot from object
    const with_object = document.createElement('div');
    const family = [{
            name: 'Andrey',
            age: 34
        },
        {
            name: 'David',
            age: 10
        },
        {
            name: ' Liliy',
            age: 39
        }
    ]
    console.table(family);
    with_object.innerHTML = funHtml(family);
    document.body.appendChild(with_object);
    return 'ok'

}

function funHtml(arr) {
    // function take object of family and add some magic
    const markUp = `
    <ul class="jump">
    ${arr.map(person => `
        <li>${boom(person.name)} 
        ${boom(person.age)} 
        ${boom("years")} </li>`).join('')}
    </ul>
    `;
    return markUp;
}


function boom(word) {
    // function take word and transponse to singl char in span block
    return Array.from(String(word)).map(char => `<span>${char}</span>`).join('');
}

export function messages()
//button clicker!!! simple event listner on the button
{
    const tst = document.querySelector('.mess');
    console.log(tst);
    const family = [{
            name: 'Andrey',
            age: 34
        },
        {
            name: 'David',
            age: 10
        },
        {
            name: ' Liliy',
            age: 39
        }
    ]
    tst.addEventListener('click', function(onMouseClick) {
        console.log('Piy')
        const ifrm = document.createElement("iframe");

        //const ifrm.setAttribute("src", "http://google.com/");
        ifrm.style.width = "140px";
        ifrm.style.height = "280px";
        const ss = `
        <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>TESTESTEAR</body></html>
        `;

        //const f = ifrm.createElement('div')
        document.body.appendChild(ifrm);


        const with_object = document.createElement('div');

        with_object.innerHTML = funHtml(family);
        document.body.appendChild(with_object);

    });

    // const win = window.open('/', 'asd');
}

export function modalShow()
// show modal form
{
    console.log('!!!!!!!!!!!!Piy');
    const showModal = document.getElementById('myBtn');
    const closeModal = document.querySelector('.close');
    const modalForm = document.getElementById('myModal');

    const [open, close] = ["block","none"];



    showModal.addEventListener('click', function(click) {
        //window.open(modalForm)
        console.log(modalForm);
        modalForm.style.display = open;
        console.log(this, click, '1++++');
    });

    closeModal.addEventListener('click', function(click) {
        //window.open(modalForm)
        // console.log(modalForm,'+++++++++++++++++++');
        modalForm.style.display = close;
        console.log(this, click);
    });


    window.onclick = function(event){
        console.log('!!!!!!!!!!!', event.target)
        if (event.target == modalForm) {
            modalForm.style.display = "none";
    }

        // console.log(modalForm);

        //  if ( modalForm.style.display === open){
        // // console.log('+++', modalForm.style.display)
        //      modalForm.style.display = close;
        //  }
 
    }

    // console.log(window.onclick, '+++')


 //    window.addEventListener('click', function(event) {
 //     if (event.target == modal) {
 //         modal.style.display = "none";
 //     });
 // }



    //     $(document).ready(function(){

    //         $("#myBtn").click(function(){
    //             $("#myModal").modal("show");
    //             });

    //         $("#myModal").on('show.bs.modal', function () {
    //             alert('The modal is about to be shown.');
    //     });
    // });




}

export function showClick2() {
    
  const pug = require('pug');

  // const compiledFunction = pug.compileFile('pug_objects.pug');

  // console.log(compiledFunction({ name: 'Andrey', lastname: 'But' }));

  console.log('Mini222');





}
  // const shNewWindow = document.getElementById('t1');


  // t1.addEventListener('click', function(){
  //   console.log('ffffff')
  //   // const newWindow = open('/j.html', 'example', 'width=300,height=300')
    
  //   // newWindow.focus();
  //   // newWindow.onload = function() {
  //   //   let html = `<div style="font-size:30px">Welcome!</div>`;
  //   //   newWindow.document.body.insertAdjacentHTML('afterbegin', html);
  //   //   };
  //   });

