'use strict'
class Usuario {
  constructor(id,nombreUsuario, fechaNacimiento, edad, localidad, email, password){
    this.id = id
    this.name = nombreUsuario;
    this.password = password;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.email = email;
    this.localidad = localidad;
    this.estado = true;
  }  
  login (){
   console.log(`Bienvenido/a ${this.name}`);
  }
  logout (){
    console.log(`Adios ${this.name}`)
  }
}

// crea nuevo objeto con mismas propiedades

let bianca = new Usuario (1,'biancaTuTurrita', '03-10-1996','26','miami','tuturrita@gmail.com');

console.log(bianca)
