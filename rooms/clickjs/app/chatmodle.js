
export function chatButton() {
    window.onload = function() {
        const icon = document.createElement('span');
        const button = document.createElement('button');

        icon.className = "glyphicon glyphicon-asterisk";


        button.className = "btn";
        button.id = "id_button";
        button.style.bottom = "0";
        button.style.position = "absolute";
        button.style.right = "0";
        button.onclick = chatFrame;
        button.appendChild(icon);

        
        document.body.appendChild(button);
        console.log('Button created!')
    }
}

function chatFrame() {
    // Create chat frame
    
    console.log('Button init');
    // const newWindow = open('/chatform.html', 'example', 'width=300,height=300, right=0; top=0')
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "/chatform.html");

    ifrm.style.width = "300px";
    ifrm.style.height = "300px";
    ifrm.style.right = "0";
    ifrm.style.bottom = "0";
    ifrm.style.position = "absolute";

    document.body.appendChild(ifrm);
    // newWindow.focus();
}
