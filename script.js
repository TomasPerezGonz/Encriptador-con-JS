const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiarContainer = document.getElementById("copiarContainer");
const mensajeIngresaTexto = document.getElementById("mensajeIngresaTexto");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar(textoEncriptado);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    if (mensajeIngresaTexto.innerText === "Ingresa el texto que desees encriptar o desencriptar.") {
        mensajeIngresaTexto.style.display = "none";
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar(textoEncriptado);
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    if (mensajeIngresaTexto.innerText === "Ingresa el texto que desees encriptar o desencriptar.") {
        mensajeIngresaTexto.style.display = "none";
    }
    return stringDesencriptada;
}

async function btnCopiar() {
    try {
        await navigator.clipboard.writeText(mensaje.value);
        mensaje.value = "";
    } catch (err) {
        
    }
    mostrarBotonCopiar("");

    location.reload();
}

function mostrarBotonCopiar(texto) {
    if (texto) {
        copiarContainer.classList.remove("oculto");
       
    } else {
        copiarContainer.classList.add("oculto");
    
    }
}


