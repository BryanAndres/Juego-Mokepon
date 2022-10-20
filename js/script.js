const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const seccionReiniciarJuego = document.getElementById('seccion-reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const btnReiniciar = document.getElementById('boton-reiniciar')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa') //canvas

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
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let nombreBotones = []
let botones = []
let ataqueJugador = []
let ataqueEnemigo = []
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

class Mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = imagen
    }
}

// 6 mokepones actualmente
let hipodogue = new Mokepon('Hipodogue','./img/AurelionSol_11.jpg', 5)
let capipepo = new Mokepon('Capipepo','./img/Rammus_6.jpg', 5)
let ratigueya = new Mokepon('Ratigueya','./img/Twitch_3.jpg', 5)
let nobaton = new Mokepon('Nobaton','./img/Brand_8.jpg', '5')
let langostelvis = new Mokepon('Langostelvis','./img/Skarner_2.jpg', 5)
let pydos = new Mokepon('Pydos','./img/Fizz_1.jpg', 5)


hipodogue.ataques.push(
    {nombre: '⚡', id : 'boton-trueno' },
    {nombre: '⚡', id : 'boton-trueno' },
    {nombre: '⚡', id : 'boton-trueno' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '🔥', id : 'boton-fuego' },
)

ratigueya.ataques.push(
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🔥', id : 'boton-fuego' },
)

capipepo.ataques.push(
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '⚡', id : 'boton-trueno' },
)

nobaton.ataques.push(
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🔥', id : 'boton-fuego' },
    {nombre: '🌱', id : 'boton-tierra' },
    {nombre: '💨', id : 'boton-aire' },
)

langostelvis.ataques.push(
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '🌱', id : 'boton-tierra' },
)

pydos.ataques.push(
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '💧', id : 'boton-agua' },
    {nombre: '💨', id : 'boton-aire' },
    {nombre: '⚡', id : 'boton-trueno' }
)
//Agrego mis mokepones al arreglos de mokepones
mokepones.push(hipodogue,capipepo,ratigueya,nobaton,langostelvis,pydos)

window.addEventListener('load', iniciarJuego)

function iniciarJuego(){
    seccionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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

        inputHipodogue = document.getElementById('Hipodogue')
        inputCapipepo  = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputNobaton   = document.getElementById('Nobaton')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputPydos = document.getElementById('Pydos')
    })

    seccionReiniciarJuego.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    // let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    if(inputHipodogue.checked){
        spanMascotaJugador.innerHTML = inputHipodogue.id
        spanEleccionJugador.innerHTML = inputHipodogue.id
        mascotaJugador= inputHipodogue.id

        seleccionarMascotaEnemigo()

        // seccionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        spanEleccionJugador.innerHTML = inputCapipepo.id
        mascotaJugador= inputCapipepo.id

        seleccionarMascotaEnemigo()

        // seccionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        spanEleccionJugador.innerHTML = inputRatigueya.id
        mascotaJugador= inputRatigueya.id

        seleccionarMascotaEnemigo()

       // seccionSeleccionarAtaque.style.display = 'flex'
       sectionVerMapa.style.display = 'flex'
       let imagenRatigueya = new Image()
       imagenRatigueya.src = ratigueya.imagen
       lienzo.drawImage(
           imagenRatigueya,
           20,
           40,
           100,
           100,
       )

       sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputNobaton.checked){
        spanMascotaJugador.innerHTML = inputNobaton.id
        spanEleccionJugador.innerHTML = inputNobaton.id
        mascotaJugador= inputNobaton.id

        seleccionarMascotaEnemigo()

        // seccionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'flex'
        let imagenNobaton = new Image()
        imagenNobaton.src = nobaton.imagen
        lienzo.drawImage(
           imagenNobaton,
           20,
           40,
           100,
           100,
        )

        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        spanEleccionJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id

        seleccionarMascotaEnemigo()

        // seccionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'flex'
        let imagenLangostelvis = new Image()
        imagenLangostelvis.src = langostelvis.imagen
        lienzo.drawImage(
           imagenLangostelvis,
           20,
           40,
           100,
           100,
        )

        sectionSeleccionarMascota.style.display = 'none'
    }
    else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        spanEleccionJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id

        seleccionarMascotaEnemigo()

        // seccionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'flex'
        let imagenPydos = new Image()
        imagenPydos.src = pydos.imagen
        lienzo.drawImage(
           imagenPydos,
           20,
           40,
           100,
           100,
        )

        sectionSeleccionarMascota.style.display = 'none'
    }
    else{
        alert('No has seleccionado una mascota porfavor intenta otra vez')
    }
    
    
    extraerAtaques(mascotaJugador) //capipepo
}

function moverCapipepo(){
    capipepo.x = capipepo.x + 5
    pintarPersonaje()
}


function pintarPersonaje(){
    lienzo.clearRect(0,0, mapa.clientWidth, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )
}


function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatoriedad(0, mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    spanEleccionEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre

    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
}

function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    //ataques = agua agua tierra fuego trueno
    mostrarAtaques(ataques) 
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
            <button class="boton BAtaque" id="${ataque.id}">${ataque.nombre}</button>
        `
        //<button class="boton" id="boton-agua"> 💧 </button>

        contenedorAtaques.innerHTML += ataquesMokepon
        nombreBotones.push(ataque.id)
    })
    /*
    //nombreBotones = ["boton-tierra","boton-tierra","boton-tierra","boton-fuego","boton-trueno"]
    nombreBotones.forEach((boton)=>{
        let btn

        btn = document.getElementById(boton)

        if(boton == 'boton-trueno'){
            btn.addEventListener('click', ataqueTrueno)
        }
        else if(boton == 'boton-agua'){
            btn.addEventListener('click', ataqueAgua)
        }
        else if(boton == 'boton-fuego'){
            btn.addEventListener('click', ataqueFuego)
        }
        else if(boton == 'boton-aire'){
            btn.addEventListener('click', ataqueAire)
        }
        else{
            btn.addEventListener('click', ataqueTierra)
        }
     
        console.log(btn);  
    })*/
    botones = document.querySelectorAll('.BAtaque')
    secuenciaAtaque()
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e);
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador);
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '🌱'){
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💨'){
                ataqueJugador.push('AIRE')
                console.log(ataqueJugador);
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '⚡'){
                ataqueJugador.push('TRUENO')
                console.log(ataqueJugador);
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            seleccionAtaqueEnemigo()
        })
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
    console.log(ataqueEnemigo);
    iniciarCombate()
}

function iniciarCombate() {
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexOponentes(i, i)
            crearMensaje('Empate')
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
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = victoriasEnemigo
                crearMensaje('Perdiste')
            }
    }

    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador == victoriasEnemigo){
        crearMensajeResultado("Esto fue un Empate")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeResultado("Has ganado esta batalla")
    }else{
        crearMensajeResultado("Has perdido la batalla, pero no la guerra")
    }
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





