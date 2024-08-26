
function encriptar(){
    const sinTexto1 = document.getElementById("inicio");
    const texto1 = document.getElementById("texto").value;
    const codigo1 = document.getElementById("textoCaja");
    const textocaja1 = document.getElementById("textoEncriptacion");
    
    sinTexto1.style.display = 'none';
    codigo1.style.display = 'none';
    if( Object.keys(texto1).length === 0 ){
        sinTexto1.style.display = 'flex';
    }
    else{
        codigo1.style.display = 'flex';
      
        
        const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
        const codificacion = ['ɐ', 'ɑ', 'ɒ', 'ɓ', 'ɔ', 'ɕ', 'ɖ', 'ɗ', 'ɘ', 'ə', 'ɚ', 'ɛ', 'ɜ', 'ɝ', 'ɞ', 'ɟ', 'ɠ', 'ɡ', 'ɢ', 'ɣ', 'ɤ', 'ɥ', 'ɦ', 'ɧ', 'ɨ', 'ɩ', 'ɪ', 'ɫ', 'ɬ', 'ɭ', 'ɮ', 'ɯ', 'ɰ', 'ɱ', 'ɲ', 'ɳ', 'ɴ', 'ɵ', 'ɶ', 'ɷ', 'ɸ', 'ɹ', 'ɺ', 'ɻ', 'ɼ', 'ɽ', 'ɾ', 'ɿ', 'ʀ', 'ʁ', 'ʂ', 'ʃ', 'ʄ', 'ʅ', 'ʡ']
        let cadena= texto1;
        console.log((cadena));
        console.log((cadena.length));
        for (let i = 0; i < letras.length; i++) {
            while (cadena.indexOf(letras[i]) !== -1) {
                
                cadena = cadena.replace(letras[i], codificacion[i]);
            }
        }
        textocaja1.value = cadena;
        
        reiniciar();
    }
    

    
    
    
}


function desencriptar(){
    const sinTexto2 = document.getElementById("inicio");
    const texto2 = document.getElementById("texto").value;
    const codigo2 = document.getElementById("textoCaja");
    const textocaja2 = document.getElementById("textoEncriptacion");
    sinTexto2.style.display = 'none';
    codigo2.style.display = 'none';
    
    if( Object.keys(texto2).length === 0 ){
        sinTexto2.style.display = 'flex';
    }
    else{
        codigo2.style.display = 'flex';
       
        
        const  codificacion= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
        const letras = ['ɐ', 'ɑ', 'ɒ', 'ɓ', 'ɔ', 'ɕ', 'ɖ', 'ɗ', 'ɘ', 'ə', 'ɚ', 'ɛ', 'ɜ', 'ɝ', 'ɞ', 'ɟ', 'ɠ', 'ɡ', 'ɢ', 'ɣ', 'ɤ', 'ɥ', 'ɦ', 'ɧ', 'ɨ', 'ɩ', 'ɪ', 'ɫ', 'ɬ', 'ɭ', 'ɮ', 'ɯ', 'ɰ', 'ɱ', 'ɲ', 'ɳ', 'ɴ', 'ɵ', 'ɶ', 'ɷ', 'ɸ', 'ɹ', 'ɺ', 'ɻ', 'ɼ', 'ɽ', 'ɾ', 'ɿ', 'ʀ', 'ʁ', 'ʂ', 'ʃ', 'ʄ', 'ʅ', 'ʡ']
        let cadena= texto2;
        console.log((cadena));
        console.log((cadena.length));
        for (let i = 0; i < letras.length; i++) {
            while (cadena.indexOf(letras[i]) !== -1) {
                
                cadena = cadena.replace(letras[i], codificacion[i]);
            }
        }
        textocaja2.value = cadena;
        reiniciar();
    }
    

    
    
    
}

function copiar() {
    
    var copia = document.getElementById("textoEncriptacion");
  
    
    copia.select();
    copia.setSelectionRange(0, 99999);
  
    
    navigator.clipboard.writeText(copia.value);
  
    
  }

  function reiniciar(){
    const vacio = '';
    document.getElementById("texto").value = vacio;
  }