const btnGeneratorQR = document.querySelector(".btn_geradorQr")
btnGeneratorQR.addEventListener("click",gerarQRCODE)

function  gerarQRCODE(){
    const resultQr = document.querySelector(".result-qrcode img")
    const valueQr = document.querySelector(".group-qrcode input").value 
    if(valueQr===""){
        alert("preencha o campo principal com valor valido")
    } else {
        const apiQr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${valueQr}`
        resultQr.src = apiQr
        resultQr.style.display="block"
    }
    document.querySelector(".group-qrcode input").value=""
}