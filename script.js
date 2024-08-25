function encriptar(){
    let tx = document.getElementById("texto-Ingresar").value;
   let titulo = document.getElementById("titulo-mensaje");
   let parra = document.getElementById("parrafo");
   let imag = document.getElementById("im");

    let tx_Cifrado = tx
                    .replace(/a/gi, "ioi")
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "enter")
                    .replace(/o/gi, "huio")
                    .replace(/u/gi, "enter");

 if(tx.length !=0){
     document.getElementById("texto-Ingresar").value = tx_Cifrado;
     titulo.textContent = "Texto encriptado";
     parra.textContent = "";
     imag.src = "imagenes/image.png"
     }
                    else{
                        imag.src = "imagenes/image.png";
                        alert("Ingresar texto, por favor");
                        titulo.textContent = "No se encontró nada";
                        parra.textContent = "Ingresa lo que quieres encriptar o desencriptar";
        
                    }
                }