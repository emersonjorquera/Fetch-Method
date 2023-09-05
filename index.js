formulario.addEventListener("submit", function(e){

    //Crear constantes del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("date").value;

    e.preventDefault(); //Evita no ejecutar el formulario
    const newformData = {
        Nombre : nombre,
        Apellido : apellido,
        FechaNacimiento : fecha
    };

    fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(newformData)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error)=>{
            console.error("Error",error)
        })
});