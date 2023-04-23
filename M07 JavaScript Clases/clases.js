// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);
 // EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
 }
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);
 //EXTENSION DE CLASE
 class Persona {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }
   saludar() {
      console.log(
         'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
      );
   }
}

martin.saludar();
class Programador extends Persona {
   constructor(nombre, edad, añosDeExperiencia) {
      super(nombre, edad);
      this.añosDeExperiencia = añosDeExperiencia;
   }
   codear() {
      console.log(
         'Soy ' +
            this.nombre +
            ' . Codeo desde hace  ' +
            this.añosDeExperiencia +
            ' años'
      );
   }
}

let martin = new Persona('Martín', 26);
let programador = new Programador('María', 37, 4);
martin.saludar();
programador.codear();