class ES6 {
   constructor(usuario, nombre, email, password){
      this.usuario= usuario;
      this.nombre= nombre;
      this.email= email;
      this.password= password;
   }
   saludar(){
      //return ("Hola, mi nombre es " + this.nombre);
      console.log("Hola, mi nombre es " + this.nombre);
   }
}
console.log( ES6.nombre);
//return ES6;
