/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   for(let i = 0; i < array.length; i++){
      return (array[0]);
   }
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      return array[array.length-1 ];  
   }
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map((num) => { return num + 1});
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
      array.push(elemento);
      return array;
}   

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabraConcatenada = palabras.join(" ");
   return palabraConcatenada;
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if(array.includes(elemento)){
      return true;
   } else{
      return false;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
 let agg = 0;
 arrayOfNums.forEach((element) => {
   agg += element;
 });
 return agg;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let promedio = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      promedio += resultadosTest[i]; // recorre cada elemento y lo va sumando a la iteracion
      
   }
   return promedio/ resultadosTest.length; //la suma total de los elementos nums almacenada en promedio se divide por el length del array
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums); // los 3 puntos representan al spread operator
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multi = 1;
   for (let i = 0; i < arguments.length; i++) {
      multi *=arguments[i];
   }
   if (arguments.length === 0){
         return 0;
      } else {
         return multi;
      }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var element= [];
   for (let i = 0; i < array.length; i++) {
      if( array[i] > 18){
         element++;
      }
   }
      return element;
}
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
         if ( numeroDeDia === 1 || numeroDeDia === 7) { // si el valor del array es :: pasa tal accion
            return "Es fin de semana";
         } else if(numeroDeDia > 1 && numeroDeDia < 7 ){
            return "Es dia laboral";
         }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(num >= 90 && num <= 99 || num === 9 || num >= 900 && num <= 999 || num >= 9000 && num <= 9999){
      return true;
   } else {
      return false;
   }
   //if (num.toString()[0] === "9") return true; transforma en string y verifica si el caracter en la posicion 0 es =="9"
   //return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  for (let i = 0; i < array.length; i++) {
   if (array[i] !== array[0]){
      return false;
      } 
   }
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesArray = [];
   for (let i = 0; i < array.length; i++) {
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i]=== "Noviembre"){
         mesesArray.push(array[i]);
      } 
   }
   if(mesesArray.length != 3){
      return "No se encontraron los meses pedidos"
   } else {
      return mesesArray;
   }
   //const meses= ["Enero", "Marzo", "Noviembre"];
   //let newArray = array.filter((mes) ==> meses.includes(mes));
   // if (newArray.length === 3){ return newArray;} return "No se encontraron los meses pedidos";

}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaDelSeis_ = [];
   for (let i = 0; i <= 10; i++) {
      tablaDelSeis_.push(i * 6);     
   }
   return tablaDelSeis_;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
      if(array[i] > 100){
         newArray.push(array[i]);
      }
   }
   return newArray;
   //let newArray = array.filter((mayor) => mayor > 100) return newArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevoValor= [];
   var bucle = num;
   for (var i = 0; i < 10; i++) {
      bucle = bucle + 2;
      
      if (bucle === i) break;
      else {
         nuevoValor.push(bucle);
      }
   }
      if(i < 10){
         return "Se interrumpió la ejecución";
      } else{
         return nuevoValor;
      }
      
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var newArray = [];
   var bucle = num;
   for (var i = 0; i < 10; i++) {
      if (i === 5){
         continue;
      }  
      bucle = bucle + 2;
      newArray.push(bucle);
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
