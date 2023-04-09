function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var array = ["Enero", "Marzo", "Noviembre", "Diciembre"];
   var mesesArray = [];
   for (let i = 0; i < array.length; i++) {
      if(array[i] === "Enero"){
         mesesArray ++;
      } if (array[i] === "Marzo"){
         mesesArray ++;
      }if (array[i] === "Noviembre"){
         mesesArray ++;
      } 
   }
   if(mesesArray.length != 3){
      console.log("No se encontraron Los meses perdidos");
   } else {
      console.log(mesesArray);
   }
}