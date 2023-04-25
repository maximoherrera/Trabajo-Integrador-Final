function convertir(){
    let dolares = parseFloat(document.getElementById("dolares").value);
    let pesos = dolares * 490;
    document.getElementById("pesos").value = pesos;
}