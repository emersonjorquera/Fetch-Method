formulario.addEventListener("submit", function(e){

    //Crear constantes del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("date").value;

    e.preventDefault(); //Evita no ejecutar el formulario
    const newformData = {   
        Nombre : nombre,            //Creamos el nuevo formulario 
        Apellido : apellido,
        FechaNacimiento : fecha
    };

    //Hacemos el fetch vinculando la API

    fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(newformData)       //Usamos el stringify para que el formulario convertirlo 
    })                                         //En Cadena JSON
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error)=>{
            console.error("Error",error)
        })
});