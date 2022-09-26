const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const btnFuego = document.getElementById('boton-fuego')
const btnAgua = document.getElementById('boton-agua')
const btnTierra  = document.getElementById('boton-tierra')
const btnAire = document.getElementById('boton-aire')
const btnTrueno = document.getElementById('boton-trueno')
const btnReiniciar = document.getElementById('boton-reiniciar')

const inputHipodogue = document.getElementById('hipodoge')
const inputCapipepo  = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputNobaton   = document.getElementById('nobaton')
const inputLangostelvis = document.getElementById('langostelvis')
const inputPydos = document.getElementById('pydos')
const spanEleccionJugador = document.getElementById('eleccion-jugador')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const seccionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const spanEleccionEnemigo = document.getElementById('eleccion-enemigo')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

let ataqueJugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener('load', iniciarJuego)

function iniciarJuego(){

    // let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    // let seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
    seccionReiniciarJuego.style.display = 'none'

    // let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    // let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click',ataqueFuego)

    // let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)

    // let btnTierra  = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    // let btnAire = document.getElementById('boton-aire')
    btnAire.addEventListener('click',ataqueAire)

    // let btnTrueno = document.getElementById('boton-trueno')
    btnTrueno.addEventListener('click', ataqueTrueno)

    // let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    if(inputHipodogue.checked){
        spanMascotaJugador.innerHTML = ('Hipodoge')
        spanEleccionJugador.innerHTML = ('Hipodoge')
        seleccionarMascotaEnemigo()

        seccionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = ('Capipepo')
        spanEleccionJugador.innerHTML = ('Capipepo')
        seleccionarMascotaEnemigo()

        seccionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = ('Ratigueya')
        spanEleccionJugador.innerHTML = ('Ratigueya')
        seleccionarMascotaEnemigo()

        seccionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputNobaton.checked){
        spanMascotaJugador.innerHTML = ('Nobaton')
        spanEleccionJugador.innerHTML = ('Nobaton')
        seleccionarMascotaEnemigo()

        seccionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = ('Langostelvis')
        spanEleccionJugador.innerHTML = ('Langostelvis')
        seleccionarMascotaEnemigo()

        seccionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = ('Pydos')
        spanEleccionJugador.innerHTML = ('Pydos')
        seleccionarMascotaEnemigo()

        seccionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else{
        alert('No has seleccionado una mascota porfavor intenta otra vez')
    }   
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatoriedad(1,6)
    
    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = ('Hipodoge')
        spanEleccionEnemigo.innerHTML = ('Hipodoge')
    }
    else if(mascotaAleatorio == 2){
        
        spanEleccionEnemigo.innerHTML = ('Capipepo')
        spanMascotaEnemigo.innerHTML = ('Capipepo')
    }
    else if(mascotaAleatorio == 3){
        
        spanEleccionEnemigo.innerHTML = ('Ratigueya')
        spanMascotaEnemigo.innerHTML = ('Ratigueya')
    }
    else if(mascotaAleatorio == 4){
        
        spanEleccionEnemigo.innerHTML = ('Nobaton')
        spanMascotaEnemigo.innerHTML = ('Nobaton')
    }
    else if(mascotaAleatorio == 5){
        
        spanEleccionEnemigo.innerHTML = ('Langostelvis')
        spanMascotaEnemigo.innerHTML = ('Langostelvis')
    }
    else{
    
        spanEleccionEnemigo.innerHTML = ('Pydos')
        spanMascotaEnemigo.innerHTML = ('Pydos')
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego 🔥'
    seleccionAtaqueEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua 💧'
    seleccionAtaqueEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra 🌱'
    seleccionAtaqueEnemigo()
}
function ataqueAire(){
    ataqueJugador = 'Aire 💨'
    seleccionAtaqueEnemigo()
}
function ataqueTrueno(){
    ataqueJugador = 'Trueno ⚡'
    seleccionAtaqueEnemigo()
}

function seleccionAtaqueEnemigo(){
    let ataqueAleatorio = aleatoriedad(1,5)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego 🔥'
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua 💧'
    }
    else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'Tierra 🌱'
    }
    else if (ataqueAleatorio == 4){
        ataqueEnemigo = 'Aire 💨'
    }
    else{
        ataqueEnemigo = 'Trueno ⚡'
    }

    combate()
}

function combate(){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('Empate')
    }
    else if(ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥' ||
            ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Tierra 🌱'||
            ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🌱'||
            ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Trueno ⚡'||
            ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Aire 💨'||
            ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Trueno ⚡'||
            ataqueJugador == 'Aire 💨' && ataqueEnemigo == 'Agua 💧'||
            ataqueJugador == 'Aire 💨' && ataqueEnemigo == 'Fuego 🔥'||
            ataqueJugador == 'Trueno ⚡' && ataqueEnemigo == 'Agua 💧'||
            ataqueJugador == 'Trueno ⚡' && ataqueEnemigo == 'Aire 💨'
            ){
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
                crearMensaje('Ganaste')
            }
    else{
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            crearMensaje('Perdiste')
        }

        revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeResultado("Felicitaciones has ganado")
    }else if(vidasJugador == 0){
        crearMensajeResultado("Has perdido la batalla, pero no la guerra")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    let notificacion = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    seccionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueJugador) 
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)  
}

function crearMensajeResultado(resultadoFinal){    
    seccionMensajes.innerHTML = resultadoFinal
    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true
    btnAire.disabled = true
    btnTrueno.disabled = true

    let seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
    seccionReiniciarJuego.style.display = 'initial'
}

function reiniciarJuego(){
    location.reload()
}

function aleatoriedad(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}





