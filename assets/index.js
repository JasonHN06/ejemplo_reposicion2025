let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let numTel=document.getElementById("numTel");
let email=document.getElementById("email");
let mensaje=document.getElementById("mensaje");
let chkInfo=document.getElementById("chkInfo");
let listInfo=document.getElementById("list-info");
let btnSubmit=document.getElementById("btnSubmit");

btnSubmit.onclick= function(){
    //Llamar a una funcion que arme la lista
    creatList();
}

function creatList(){
    let html=""; //Creando asignando un valor vacio string
    //html="<li class='list-group-item'>Nombre: "+name.value+"<br> Edad: "+age.value+"</li>";

    html=`
        <li class="list-group-item">
        nombre: ${nombre.value} <br>
        apellido: ${apellido.value} <br>
        numTel: ${numTel.value} <br>
        email: ${email.value} <br>
        mensaje: ${mensaje.value}
        </li>
        `;
        
    console.log(html);
    listInfo.innerHTML+=html;
}