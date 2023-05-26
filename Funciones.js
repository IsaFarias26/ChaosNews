var Name = document.getElementById('Name');
var CorreoElectronico = document.getElementById('CorreoElectronico');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

function EnviarFormulario(){
    console.log('Ingresando');
    var messagError = [];
    if(Name.value === null || Name.value === ''){
        messagError.push('Ingresa tu usuario');
    }
    if(CorreoElectronico.value === null || CorreoElectronico.value === ''){
        messagError.push('Ingresa tu Correo electronico');
    }
    if(password.value === null || password.value === ''){
        messagError.push('Ingresa tu contraseña');
    }
    
    error.innerHTML =  messagError.join(', ');

    return false;
}