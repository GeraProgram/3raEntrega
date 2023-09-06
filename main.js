const productos = [
    { nombre: "prestamos", informacion: "Hasta 6 cuotas(50% Interes). Hasta 12 cuotas(100% Interes). Hasta 24 cuotas(300%)" },
    { nombre: "seguros", informacion: "Seguro de Automotor, Seguro de vida, Seguro de vivienda" },
    { nombre: "inversiones", informacion: "Inversiones de Bienes Raices. Inversiones en Activos" },
];


const clientes = [];


let usuario = prompt("Ingrese Nombre y Apellido");
let usuarioStorage = localStorage.getItem(`${usuario}`);
let objeto = JSON.parse(usuarioStorage);

if (usuarioStorage) {
    usuario = usuarioStorage;

    objeto.forEach((item) => {
        let div = document.createElement("div");
        div.innerHTML = `
         <h2>Cliente: ${item.nombre}</h2>
          <p>Localidad: ${item.localidad}</p>
          <b>Producto solicitado: ${item.producto}
          Informacion: ${productos.informacion}</b>
         <br>
          <button id="eliminar"> Eliminar registro<button/>
     `;

        document.body.append(div);
    });

} else {
    alert("Tienes que registrarte")
    let div = document.createElement("div");
    div.innerHTML = `

<form id="formulario" method="get">
<label for="nombre">Nombre y Apellido</label>
<input id ="nombre" type= "text" >
<label for="dni">D.N.I</label>
<input id="dni" type="number" >
<label for="Localidad">Localidad</label>
<input id = "Localidad" type="text" >
<label for="productoDeseado">Producto deseado</label>
<input id="producto" type="text"  >
<input id="boton" type="submit" value="Enviar">
</form> 


`;

    document.body.append(div);

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputs = e.target.children;

        const cliente = {
            nombre: inputs[1].value,
            dni: inputs[3].value,
            localidad: inputs[5].value,
            producto: inputs[7].value,
        };
        if (productos.find((item) => item.nombre === cliente.producto)) {

            alert("Bienvenido");

            clientes.push(cliente);

            localStorage.setItem(`${cliente.nombre}`, JSON.stringify(clientes));

            div.remove();

            clientes.forEach((item) => {
                let div = document.createElement("div");
                div.innerHTML = `
        <h2>Cliente: ${item.nombre}</h2>
        <p>Localidad: ${item.localidad}</p>
        <b>Producto solicitado: ${item.producto}
        Informacion: ${productos.informacion}</b>
        <br>
        <button id="eliminar"> Eliminar registro<button/>
        `;

                document.body.append(div);
            });
        } else {
            alert("Elija entre prestamos, seguros e inversiones")
        }
    });
};
let eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", () => {
    localStorage.clear();
    alert("Regristo Borrado");



})






