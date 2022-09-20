let ataqueJugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3


window.addEventListener('load', iniciarJuego)

function aleatoriedad(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatoriedad(1,6)
    let spanEleccionEnemigo = document.getElementById('eleccion-enemigo')
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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

function seleccionarMascotaJugador(){
    let inputHipodogue = document.getElementById('hipodoge')
    let inputCapipepo  = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputNobaton   = document.getElementById('nobaton')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputPydos = document.getElementById('pydos')

    let spanEleccionJugador = document.getElementById('eleccion-jugador')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    // Inyecta condigo css para ocultar las secciones
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    
    if(inputHipodogue.checked){
        spanMascotaJugador.innerHTML = ('Hipodoge')
        spanEleccionJugador.innerHTML = ('Hipodoge')
        seleccionarMascotaEnemigo()

        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = ('Capipepo')
        spanEleccionJugador.innerHTML = ('Capipepo')
        seleccionarMascotaEnemigo()

        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = ('Ratigueya')
        spanEleccionJugador.innerHTML = ('Ratigueya')
        seleccionarMascotaEnemigo()

        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputNobaton.checked){
        spanMascotaJugador.innerHTML = ('Nobaton')
        spanEleccionJugador.innerHTML = ('Nobaton')
        seleccionarMascotaEnemigo()

        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = ('Langostelvis')
        spanEleccionJugador.innerHTML = ('Langostelvis')
        seleccionarMascotaEnemigo()

        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = ('Pydos')
        spanEleccionJugador.innerHTML = ('Pydos')
        seleccionarMascotaEnemigo()

        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else{
        alert('No has seleccionado una mascota porfavor intenta otra vez')
    }   
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeResultado("Felicitaciones has ganado")
    }else if(vidasJugador == 0){
        crearMensajeResultado("Has perdido la batalla, pero no la guerra")
    }
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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

function crearMensaje(resultado){
    let seccionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

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
    let seccionMensajes = document.getElementById('resultado')
    
    seccionMensajes.innerHTML = resultadoFinal

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.disabled = true

    let btnAgua = document.getElementById('boton-agua')
    btnAgua.disabled = true

    let btnTierra  = document.getElementById('boton-tierra')
    btnTierra.disabled = true

    let btnAire = document.getElementById('boton-aire')
    btnAire.disabled = true

    let btnTrueno = document.getElementById('boton-trueno')
    btnTrueno.disabled = true

    let seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
    seccionReiniciarJuego.style.display = 'initial'
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

function reiniciarJuego(){
    location.reload()
}

function iniciarJuego(){

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
    seccionReiniciarJuego.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click',ataqueFuego)

    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)

    let btnTierra  = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnAire = document.getElementById('boton-aire')
    btnAire.addEventListener('click',ataqueAire)

    let btnTrueno = document.getElementById('boton-trueno')
    btnTrueno.addEventListener('click', ataqueTrueno)

    let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
}




