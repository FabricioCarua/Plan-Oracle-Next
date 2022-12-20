let textInput =document.querySelector("#textInput")
let buttonEncriptar = document.querySelector("#btn-encriptar")
let buttonDesencriptar = document.querySelector("#btn-desencriptar")
let buttonCopiar = document.querySelector("#btn-copy")
let output =document.querySelector(".output")
let noData= document.querySelector(".noData")
let imgNoData= document.querySelector(".imgNoData")

let encriptar=()=>{
    let encriptado=(textInput.value.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"))
    output.innerHTML=`<h3 class="mensaje">${encriptado}</h3>`
    buttonCopiar.style.display="block"
    output.style.display="relative"
    noData.style.display="none"
    imgNoData.style.display="none"
    textInput.value=""
}
let desencriptar=()=>{
    let desencriptado= (textInput.value.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"))
    output.innerHTML=`<h3 class="mensaje">${desencriptado}</h3>
                <button id="btn-copy">Copiar</button>
                     `
    output.style.display="relative"
    noData.style.display="none"
    imgNoData.style.display="none"
    textInput.value=""
}


let copiar=()=>{
    let copia=document.querySelector(".mensaje").innerHTML
    navigator.clipboard.writeText(copia)
}
buttonEncriptar.addEventListener("click",encriptar)
buttonDesencriptar.addEventListener("click", desencriptar)
buttonCopiar.addEventListener("click", copiar)


