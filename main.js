const btnToggle=document.querySelector('.toggle-btn')
    btnToggle.addEventListener('click',function(){
    //console.log("click-menu")
    document.getElementById('sidebar').classList.toggle('active')
});


function mostrar(x,y){
if(x!="" & y!=""){
var z="USUARIO : "+x+"\n "+"CONTRASEÑA : "+y;
console.log("USUARIO : "+x);
console.log("CONTRASEÑA : "+y);
alert(z)
}else{
    alert("Vacio")
}

}

function mostrarRegistro(x,y,r){
    if(x!="" & y!="" &r!=""){
    var z="CORREO : "+r+"\n"+"USUARIO : "+x+"\n "+"CONTRASEÑA : "+y

    console.log("CORREO ELECTRONICO"+r)
    console.log("USUARIO : "+x);
    console.log("CONTRASEÑA : "+y);
    
    alert(z)
    }else{
        alert("Vacio")
    }
    
    }