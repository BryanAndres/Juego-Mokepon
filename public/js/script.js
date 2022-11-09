window.addEventListener('load', iniciarJuego)

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const spanEleccionJugador = document.getElementById('eleccion-jugador')
const spanEleccionEnemigo = document.getElementById('eleccion-enemigo')

const contenedorAtaques = document.getElementById('contenedor-ataques')

const seccionMensajes = document.getElementById('resultado')
const seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
const btnReiniciar = document.getElementById('boton-reiniciar')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')

const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let jugadorId = null
let enemigoId = null
let mokepones = []
let botones = []
let ataqueJugador = []
let ataqueEnemigo = []
let mokeponesEnemigos = []

let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo  
let inputRatigueya 
let inputNobaton   
let inputLangostelvis 
let inputPydos 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let btnFuego 
let btnAgua 
let btnTierra  
let btnAire 
let btnTrueno 
let vidasJugador = 3
let vidasEnemigo = 3

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src= '../img/a.jpg'


let alturaQueBuscamos 
let anchoMapa = window.innerWidth - 20
const anchoMaximoMapa = 700

if (anchoMapa > anchoMaximoMapa) {
    anchoMapa = anchoMaximoMapa -20
}
alturaQueBuscamos = anchoMapa * 600 / 800
mapa.width = anchoMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, imagen, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa

        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatoriedad(0, mapa.width - this.ancho)
        this.y = aleatoriedad(0, mapa.height - this.alto)
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )       
    }
}

// 6 Crean los mokepones
let hipodogue = new Mokepon('Hipodogue','../img/hipodogue.png', 5, '../img/hipodogeCabeza.jpg')
let capipepo = new Mokepon('Capipepo','../img/capipepo.png', 5, '../img/capipepoCabeza.jpg')
let ratigueya = new Mokepon('Ratigueya','../img/ratigueya.jpg', 5, '../img/ratigueyaCabeza.jpg')
let nobaton = new Mokepon('Nobaton','./img/Brand_8.jpg', 5, '../img/Brand_8.jpg')
let langostelvis = new Mokepon('Langostelvis','./img/Skarner_2.jpg', 5, '../img/Skarner_2.jpg')
let pydos = new Mokepon('Pydos','./img/Fizz_1.jpg', 5, '../img/Fizz_1.jpg')

const HIPODOGUE_ATAQUES = [
    {nombre: '⚡', id : 'boton-trueno' },
    {nombre: '⚡', id : 'boton-trueno' },
    {nombre: '⚡', id : 'boton-trueno' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '🔥', id : 'boton-fuego' },
]

const CAPIPEPO_ATAQUES =[
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '⚡', id : 'boton-trueno' },
]

const RATIGUEYA_ATAQUES = [
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🔥', id : 'boton-fuego' },
]

const NOBATON_ATAQUES =[
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '💨', id : 'boton-aire' },
]

const LANGOSTELVIS_ATAQUES = [
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '🌱', id : 'boton-tierra' },
]

const PYDOS_ATAQUES = [
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '⚡', id : 'boton-trueno' }
]


// Le creo los ataques a los mokepones
hipodogue.ataques.push(...HIPODOGUE_ATAQUES)
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
nobaton.ataques.push(...NOBATON_ATAQUES)
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
pydos.ataques.push(...PYDOS_ATAQUES)

//Agrego mis mokepones al arreglos de mokepones
mokepones.push(hipodogue,capipepo,ratigueya,nobaton,langostelvis,pydos)

function iniciarJuego(){
    seccionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    seccionReiniciarJuego.style.display = 'none'

    mokepones.forEach((mokepon)=> {
        opcionDeMokepones = 
        `<input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="seleccion-mokepon__label" for=${mokepon.nombre}>
            <figure>
                <img src="${mokepon.imagen}" alt="${mokepon.nombre}">
                <figcaption>${mokepon.nombre}</figcaption>
            </figure>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })

    inputHipodogue = document.getElementById('Hipodogue')
    inputCapipepo  = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    inputNobaton   = document.getElementById('Nobaton')
    inputLangostelvis = document.getElementById('Langostelvis')
    inputPydos = document.getElementById('Pydos')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    unirseJuego()
}

function unirseJuego(){
    fetch("http://localhost:8080/unirse")
    .then((res) => {
        if(res.ok){
            res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta
                })
        }
    })
}

function seleccionarMascotaJugador(){

    if(inputHipodogue.checked){
        representarNombre(inputHipodogue)
    }
    else if(inputCapipepo.checked){
        representarNombre(inputCapipepo)
    }
    else if(inputRatigueya.checked){
        representarNombre(inputRatigueya)
    }
    else if(inputNobaton.checked){
        representarNombre(inputNobaton)
    }
    else if(inputLangostelvis.checked){
        representarNombre(inputLangostelvis)
    }
    else if(inputPydos.checked){
        representarNombre(inputPydos)
    }
    else{
        alert('No has seleccionado una mascota porfavor intenta otra vez')
    }

}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method : "post",
        headers :{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function representarNombre(nombreMascota) {
    spanMascotaJugador.innerHTML = nombreMascota.id
    spanEleccionJugador.innerHTML = nombreMascota.id
    mascotaJugador= nombreMascota.id//capipepo 

    sectionSeleccionarMascota.style.display = 'none'
    sectionVerMapa.style.display = 'flex'

    iniciarMapa()
    extraerAtaques(mascotaJugador)
    seleccionarMokepon(mascotaJugador) 
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota() 
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', activacionTecla)

    window.addEventListener('keyup', detener)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}

function enviarPosicion(x,y) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method : "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function({enemigos}){    
                    mokeponesEnemigos = enemigos.map(function(enemigo) {

                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""

                        if (mokeponNombre === "Hipodogue") {
                            mokeponEnemigo = new Mokepon('Hipodogue','../img/hipodogue.png', 5, '../img/hipodogeCabeza.jpg', enemigo.id)
                        }else if(mokeponNombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon('Capipepo','../img/capipepo.png', 5, '../img/capipepoCabeza.jpg', enemigo.id)
                        }else if(mokeponNombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon('Ratigueya','../img/ratigueya.jpg', 5, '../img/ratigueyaCabeza.jpg', enemigo.id)
                        }else if(mokeponNombre === "Nobaton"){
                            mokeponEnemigo = new Mokepon('Nobaton','./img/Brand_8.jpg', 5, '../img/Brand_8.jpg', enemigo.id)
                        }else if(mokeponNombre === "Langostelvis"){
                            mokeponEnemigo = new Mokepon('Langostelvis','./img/Skarner_2.jpg', 5, '../img/Skarner_2.jpg', enemigo.id)
                        }else{
                            mokeponEnemigo = new Mokepon('Pydos','./img/Fizz_1.jpg', 5, './img/Fizz_1.jpg', enemigo.id)
                        }
                        mokeponEnemigo.x = enemigo.x || 0
                        mokeponEnemigo.y = enemigo.y || 0

                        return mokeponEnemigo
                    })
                })
        }
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5 
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY= -5
}

function activacionTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
        default:
            break;
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detener()
    clearInterval(intervalo)
    console.log("Se detecto una colision");
    enemigoId = enemigo.id

    seccionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

function detener(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}


function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques) 
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
            <button class="boton BAtaque" id="${ataque.id}">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    
    botones = document.querySelectorAll('.BAtaque')
}

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    spanEleccionEnemigo.innerHTML = enemigo.nombre

    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function secuenciaAtaque(){

    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {

            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log("Tu ataque fue",ataqueJugador);;
                boton.style.background = '#112f58'
                boton.disabled = true

            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log("Tu ataque fue",ataqueJugador);;
                boton.style.background = '#112f58'
                boton.disabled = true

            }else if(e.target.textContent === '🌱'){
                ataqueJugador.push('TIERRA')
                console.log("Tu ataque fue",ataqueJugador);;
                boton.style.background = '#112f58'
                boton.disabled = true

            }else if(e.target.textContent === '💨'){
                ataqueJugador.push('AIRE')
                console.log("Tu ataque fue",ataqueJugador);;
                boton.style.background = '#112f58'
                boton.disabled = true

            }else if(e.target.textContent === '⚡'){
                ataqueJugador.push('TRUENO')
                console.log("Tu ataque fue",ataqueJugador);
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            ataques : ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res){
        if (res.ok) {
            res.json()
                .then(function ({ataques}){
                    if (ataques.length === 5) {
                        ataqueEnemigo = ataques
                        combate()
                    }
                })
        }
    })
}

function seleccionAtaqueEnemigo(){
    let ataqueAleatorio = aleatoriedad(0,ataquesMokeponEnemigo.length-1)

    if (ataqueAleatorio == 0 ) {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueAleatorio == 1){
        ataqueEnemigo.push('AGUA')
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo.push('TIERRA')
    }
    else if (ataqueAleatorio == 3){
        ataqueEnemigo.push('AIRE')
    }
    else{
        ataqueEnemigo.push('TRUENO')
    }
    console.log("El enemigo selecciono", ataqueEnemigo);
    iniciarCombate()
}

function iniciarCombate() {
    if (ataqueJugador.length === 5){
        combate()
    }
}

function combate(){
    clearInterval(intervalo)

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexOponentes(i, i)
            crearMensaje('Empataste')

        }
        else if(ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'FUEGO' ||
            ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'TIERRA'||
            ataqueJugador[i] == 'FUEGO' && ataqueEnemigo[i] == 'TIERRA'||
            ataqueJugador[i] == 'FUEGO' && ataqueEnemigo[i] == 'TRUENO'||
            ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'AIRE'||
            ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'TRUENO'||
            ataqueJugador[i] == 'AIRE' && ataqueEnemigo[i] == 'AGUA'||
            ataqueJugador[i] == 'AIRE' && ataqueEnemigo[i] == 'FUEGO'||
            ataqueJugador[i] == 'TRUENO' && ataqueEnemigo[i] == 'AGUA'||
            ataqueJugador[i] == 'TRUENO' && ataqueEnemigo[i] == 'AIRE'
            ){
                indexOponentes(i, i)
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
                crearMensaje('Ganaste')
            }
        else{
                indexOponentes(i, i)
                victoriasEnemigo++
                spanVidasEnemigo.innerHTML = victoriasEnemigo
                crearMensaje('Perdiste')
            }
    }
    revisarVidas()
}

function indexOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}


function revisarVidas(){
    if(victoriasJugador == victoriasEnemigo){
        crearMensajeResultado("Esto fue un Empate")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeResultado("Has ganado esta batalla")
    }else{
        crearMensajeResultado("Has perdido la batalla, pero no la guerra")
    }
    btnReiniciar.addEventListener('click', reiniciarJuego) 
}

function crearMensaje(resultado){
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    let notificacion = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    
    seccionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueJugador) 
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)  
}

function crearMensajeResultado(resultadoFinal){    
    seccionMensajes.innerHTML = resultadoFinal
    let seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
    seccionReiniciarJuego.style.display = 'initial'
}

function reiniciarJuego(){
    location.reload()
}

function aleatoriedad(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}




