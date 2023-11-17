function enviar(){
    //en esta funcion recivimos los datos y con el mandamos un alerta con cada uno de los datos recividos
    let=texto="";
    var nombre="Nombre: "+document.getElementById("nombre").value+"\n";
    texto=texto+nombre;
    var correo="correo: "+document.getElementById("correo").value+"\n";
    texto=texto+correo;
    alert(texto);
}