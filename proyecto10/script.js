const navegacion=document.querySelector("#menu");
const abrir =document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");

//evento que escucha para el abrir menu
abrir.addEventListener("click", ()=>{
    navegacion.classList.add("visible");
})
//remueve la clase del menu y se contrae
cerrar.addEventListener("click", ()=>{
    navegacion.classList.remove("visible");
})