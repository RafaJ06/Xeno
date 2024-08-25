function encriptar(){
    let tx = document.getElementById("texto-Ingresar").value;
   let titulo = document.getElementById("titulo-mensaje");
   let parra = document.getElementById("parrafo");
   let imag = document.getElementById("im");

    let tx_Cifrado = tx
                    .replace(/a/g, "ai")
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");

 if(tx.length !=0){
     document.getElementById("texto-Ingresar").value = tx_Cifrado;
     titulo.textContent = "Texto encriptado";
     parra.textContent = "";
     imag.src = "imagenes/image.png"
     }
                    else{
                        imag.src = "imagenes/image.png";
                       swal( "Algo salió mal", "Ingresar texto, por favor", "warning");
                        titulo.textContent = "No se encontró nada";
                        parra.textContent = "Ingresa lo que quieres encriptar o desencriptar";
        
                    }
                    
                }

function desencriptar(){                    
 let tx = document.getElementById("texto-Ingresar").value;
     let titulo = document.getElementById("titulo-mensaje");
      let parra = document.getElementById("parrafo");
       let imag = document.getElementById("im");

                    let tx_Cifrado = tx
                    .replace(/ai/g, "a")
                    .replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");

                    if(tx.length !=0){
                        document.getElementById("texto-Ingresar").value = tx_Cifrado;
                        titulo.textContent = "Texto desencriptado";
                        parra.textContent = "";
                        imag.src = "imagenes/image.png";
                        copy()
                    }

                    else{
                        imag.src = "imagenes/image.png";
                         swal( "Algo salió mal", "Ingresar texto, por favor", "warning");
                        titulo.textContent = "No se encontró nada";
                        parra.textContent = "Ingresa lo que quieres encriptar o desencriptar";
        
                    }
                    
                }

                function copiarAlPortapapeles() {

                    let texto = document.getElementById("texto-Ingresar").value;
                    navigator.clipboard.writeText(texto).then(() => {
                        console.log('Texto copiado al portapapeles!');
                        alert('Texto copiado al portapapeles!');
                    }).catch(err => {
                        console.error('Error al copiar el texto: ', err);
                    });
                }