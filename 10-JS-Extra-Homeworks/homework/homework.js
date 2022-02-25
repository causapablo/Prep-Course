// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //return Object.entries(objeto);
  
  var arreglo = [];
  for(prop in objeto){
    var arregloContenedor = [prop,objeto[prop]];
    arreglo.push(arregloContenedor);
  }
  return arreglo;


}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objetoContador = {};

  for(var i=0; i<string.length;i++){
    !(string[i] in objetoContador) ? objetoContador[string[i]]=1 : objetoContador[string[i]]++;
  }
  
  return objetoContador;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var capFront = '';
  var lowBack = '';
  for(var i=0;i<s.length;i++){
    (s[i]==s[i].toUpperCase()) ? capFront+=s[i] : lowBack+=s[i];
  }
  
  return capFront+lowBack;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //Dividimos el string en substrings de cada palabra. 
  //var palabras = str.split(' ');
  //var arregloPalabras = [];
  /*palabras.forEach(function(palabra){
    var revertida = '';
    for(var i=palabra.length-1;i>=0;i--){
      revertida+=palabra[i];
    }
    arregloPalabras.push(revertida);
  });*/
  //return arregloPalabras.join(' ');
  //En este problema se puede agregar un metodo al prototipo de String, y despues usarlo en el map. 
  return str.split(' ').map(function(palabra){
    var revertida = '';
    for(var i=palabra.length-1;i>=0;i--){
      revertida+=palabra[i];
    }
    return revertida;
  }).join(' ');
} 

String.prototype.reverse = function(){
  var reversed = "";
  for(var i=this.length-1;i>=0;i--){
    reversed+=this[i];
  }
  return reversed;
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString();
  if(str===str.reverse()){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var chainModificada = "";
  for(var i=0; i<cadena.length;i++){
    if(!(cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c')){
      chainModificada+=cadena[i];
    }
  }
  return chainModificada;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arregloContenedor=[];
  var arregloOrdenado = [];
  arr.forEach(function(item){
    if(arregloContenedor[item.length]===undefined){
      arregloContenedor[item.length]=item;
    }else{
      arregloContenedor[item.length+1]=item;
    }
    
  });
  for(var j=0; j<arregloContenedor.length;j++){
    if(arregloContenedor[j]!==undefined){
      arregloOrdenado.push(arregloContenedor[j]);
    }
  }
  return arregloOrdenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var intersection = [];
  arreglo1.forEach(function(item){
    for(var i=0; i<arreglo2.length;i++){
      if(item===arreglo2[i]){
        intersection.push(item);
      }
    }
  });
  
  return intersection;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

