
const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".output-text");
let remplazos=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];


function btnEncriptar(){
    const textEncriptado = encriptar(inputTexto.value);
    resultado();
    mensaje.value = textEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    resultado();
    mensaje.value=textoDesencriptado;
}

function encriptar(cadenaParaEcnriptar){
    for(let i=0;i<remplazos.length;i++){
        cadenaParaEcnriptar=cadenaParaEcnriptar.toLowerCase();

        if(cadenaParaEcnriptar.includes(remplazos[i][0])){
            cadenaParaEcnriptar = cadenaParaEcnriptar.replaceAll(remplazos[i][0],remplazos[i][1]);
        }
    }
    return cadenaParaEcnriptar;
}

function desencriptar(cadenadesencriptar) {
    for(let i = 0; i < remplazos.length; i++) {
        cadenadesencriptar=cadenadesencriptar.toLowerCase();

        if(cadenadesencriptar.includes(remplazos[i][1])){
            cadenadesencriptar=cadenadesencriptar.replaceAll(remplazos[i][1],remplazos[i][0]);
        }
    }
    return cadenadesencriptar;
}

function resultado(){
    document.getElementById("munieco").style.display="none";
    document.getElementById("msg-inicio").style.display="none";
    document.getElementById("parrafo-anuncio").style.display="none"; 
    document.getElementById("copiar").style.display="inherit";   
}

function copiar(){
    var contenido2 = document.querySelector("#texto2")
    contenido2.select();
    document.execCommand("cut");

}

