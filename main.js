alert("Bienvenido a su zona de reservas por favor siga cada uno de los pasos que se le indican");

class Persona {
    constructor(nombre, apellido, edad, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo;
    }
}

const persona1 = new Persona(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad"));


let zona_horaria= parseFloat(prompt("Ingrese la hora en formato 24 horas"));
let minutos = parseInt(prompt("Ingrese los minutos"));

function hora_local(zona_horaria, minutos){

    if (zona_horaria >= 00 && zona_horaria < 12 && minutos > 00 && minutos < 60) {
    alert("Buenos días " + persona1.nombre + " "  + persona1.apellido + " " +", Su edad es de " + persona1.edad + " " + "Años" + " La hora en su pais es de : " + zona_horaria + ":" + minutos + " AM");
    return "Buenos días " + persona1.nombre + " "  + persona1.apellido + " " +", Su edad es de " + persona1.edad + " " + " Años" + " la hora en su pais es de : " + zona_horaria + ":" + minutos + " AM";
    }

    else if (zona_horaria >= 12 && zona_horaria < 18 && minutos > 00 && minutos < 60) {
    alert("Buenas tardes " + persona1.nombre + " "  + persona1.apellido + " " +", Su edad es de " + persona1.edad + " " + "Años" + " La hora en su pais es de : " + zona_horaria + ":" + minutos + " PM");
    return "Buenas tardes " + persona1.nombre + " "  + persona1.apellido + " " +", Su edad es de " + persona1.edad + " " + " Años" + " La hora en su pais es de : " + zona_horaria + ":" + minutos + " PM";
    }

    else if (zona_horaria >= 18 && zona_horaria < 24 && minutos > 00 && minutos < 60) {
    alert("Buenas noches " + persona1.nombre + " "  + persona1.apellido + " " +", Su edad es de " + persona1.edad + " " + "Años" + " La hora en su pais es de : " + zona_horaria + ":" + minutos + " PM");
    return "Buenas noches " + persona1.nombre + " "  + persona1.apellido + " " +", Su edad es de " + persona1.edad + " " + " Años" + " La hora en su pais es de : " + zona_horaria + ":" + minutos + " PM";
    }

    else {
    alert("Hora inválida");
    }
}

console.log(hora_local(zona_horaria, minutos));

let servicio = prompt("Si desea aceptar el servicio de hotel \n 1. Si \n 2. No");
let cantidad = parseInt(prompt("Ingrese la cantidad de personas"));
let hora = parseInt(prompt("Ingrese la hora en formato 24 horas"));
let minuto = parseInt(prompt("Ingrese los minutos"));

console.log(servicio, cantidad, hora, minuto);

function reservas(servicio, cantidad, hora){
    this.servicio = servicio;
    this.cantidad = cantidad;
    this.hora = hora;
    this.minuto = minuto;
}

function mensaje(){
    reservacionT= alert("Su reserva se ha realizado con éxito");
}

reservas(servicio, cantidad, hora, minuto);

miarray=[];

if (servicio == 1) {
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");
        let edad = parseInt(prompt("Ingrese su edad"));
        let correo = prompt("Ingrese su correo electrónico");
        let hotel = new Persona(nombre, apellido, edad, correo);
        miarray.push(hotel);
    }
}else{
    alert("Gracias por su visita");
}

console.log(miarray);
mensaje();
