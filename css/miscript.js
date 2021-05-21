function validar_envio(){
  if (document.formulario.nombre.value.length==0) {
      alert("Tienes que escribir tu nombre!")
      document.formulario.nombre.focus()
      return 0;

  }

  function validar_mensaje(){
    if (document.formulario.mensaje.value.length==0) {
        alert("Tienes que escribir tu mensaje/consulta!")
        document.formulario.mensaje.focus()
        return 0;
  
    }

  edad = parseInt(document.formulario.edad.value)
  if (isNaN(edad)){
      alert("Debe ingresar correctamente su edad!")
      document.formulario.edad.focus()
      return 0;
         
  }else{
      if (edad<18){
          alert("Debe ser mayor de 18 años!")
          document.formulario.edad.focus()
          return 0;
  
      }

  }

  alert("Datos ingresados correctamente!");
  document.formulario.submit();
  }
}
