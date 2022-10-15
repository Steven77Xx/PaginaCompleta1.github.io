function validar(){
var form = document.form;
if(form.nombre.value==0){
alert("El campo nombre esta vacio")
form.nombre.value="";
form.nombre.focus();
return false;
    }
if(form.documento.value==0){
 alert("El campo documento esta vacio")
 form.documento.value="";
 form.documento.focus();
return false;
    }
if(form.telefono.value==0){
 alert("El campo teléfono esta vacio")
form.telefono.value="";
form.telefono.focus();
return false;
        }
if(form.correo.value==0){
 alert("El campo Correo esta vacio")
 form.correo.value="";
 form.correo.focus();
return false;
            }
}