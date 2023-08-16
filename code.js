/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {

  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 
  datosPersona.nombre = prompt("Ingresa tu nombre");
  const año = prompt("En qué año naciste?");
  datosPersona.ciudad = prompt("En qué ciudad vivís?");
  datosPersona.interesPorJs = confirm("¿Te interesa Javascript?");
  datosPersona.edad = 2023 - año;

}


function renderizarDatosUsuario() {

  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const nombre = document.querySelector("#nombre");
  const edad = document.getElementById("edad");
  const ciudad = document.getElementById("ciudad");
  const interes = document.getElementById("javascript");

  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;

  if(datosPersona.interesPorJs){
    interes.innerHTML = "Si";
  }else{
    interes.innerHTML = "No";
  }

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  for(i=0; i<listado.length; i++){

    const contenedor = document.querySelector("#fila");

    const caja= document.createElement("div");

    const img= document.createElement("img");

    const p1= document.createElement("p");
    const p2= document.createElement("p");

    
    caja.setAttribute("class", "caja");
    img.setAttribute("src", listado[i].imgUrl);
    p1.setAttribute("class", "lenguajes");
    p2.setAttribute("class", "bimestre");


    p1.innerHTML=(listado[i].lenguajes);
    p2.innerHTML=(listado[i].bimestre);

    caja.appendChild(img);
    caja.appendChild(p1);
    caja.appendChild(p2);
    contenedor.appendChild(caja); 

    console.log(img);
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  const sitio = document.getElementById("sitio");

  if(sitio.classList.contains("dark")){
    sitio.classList.remove('dark');
  } else {
    sitio.classList.add("class", "dark");
  }  

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const oculto = document.querySelector(".oculto");

document.addEventListener("keydown", function(event){

  if(event.key == "f"){
    oculto.classList.remove("oculto");
  }
});



