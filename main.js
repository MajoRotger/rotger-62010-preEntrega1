//Declaracion de variables
const pacientes = ["12345678"];
const turnos = [];
let dni;


//Mensajes
const mensajeBienvenida = () => alert("Bienvenido al simulador de turnos del centro medico Rotger!")
const mensajeDespedida = () => alert("Gracias por visitarnos");
const mensajeError = () => alert("ERROR:No se ingreso ningun dato o el dato es erroneo");


//Funciones

function agregarTurno() {
    let salir = false;
    while (!salir){
        const opcion = prompt ("Seleccione una opción:\n1. Cardiologia\n2. Clinica Medica\n3. Dermatologia\n4. Neurologia\n5. Salir");
        switch (opcion) {
            case "1":
                turnos.push("cardiologia");
                break
            case "2":
                turnos.push("clinica medica");
                break
            case "3":
                turnos.push("dermatologia");
                break
            case "4":
                turnos.push("neurologia");
                break   
            case "5":
                salir = true;
                menu();
                break
            default:
                alert("Opción inválida. Por favor, seleccione una opción del 1 al 5.")
        }
    }
}

function verTurnos() {
    if (turnos.length === 0) {
        alert("No hay turnos asignados.");
    } else {
        let mensaje = "Turnos asignados:\n";
        for (let i = 0; i < turnos.length; i++) {
            mensaje += `${i + 1}. ${turnos[i]}\n`;
        }
        alert(mensaje);
    }
}

function eliminarTurno() {
    if (turnos.length === 0) {
        alert("No hay turnos para eliminar.");
        return;
    }

    const numeroTurno = Number(prompt("Ingrese el número de turno a eliminar:"));
    if (isNaN(numeroTurno) || numeroTurno < 1 || numeroTurno > turnos.length) {
        alert("Número de turno inválido.");
    } else {
        const confirmacion = confirm(`¿Está seguro de que desea eliminar el turno"?`);
        if (confirmacion) {
            turnos.splice(numeroTurno - 1, 1);
            alert("Turno eliminado exitosamente.");
        }
    }
}

function menu () {
    let salir = false;
    while (!salir){
        const opcion = prompt ("Seleccione una opción:\n1. Agregar turno\n2. Ver turnos\n3. Eliminar turno\n4. Salir");
        switch (opcion) {
            case "1":
                agregarTurno();
                break
            case "2":
                verTurnos();
                break
            case "3":
                eliminarTurno();
                break
            case "4":
                salir = true;
                mensajeDespedida();
                break
            default:
                alert("Opción inválida. Por favor, seleccione una opción del 1 al 4.")
        }
    }
}

function agregarPaciente(){
    dni = prompt("Ingrese numero de DNI: ");
    if(dni ==! null || dni.length === 8){
        pacientes.push(dni);
        alert("paciente agregado correctamente");
        menu();
    }else{
        mensajeError();
        agregarPaciente();
    }
}

function existePaciente(){
    mensajeBienvenida();
    dni = prompt("Ingrese numero de DNI: ");
    if(dni ==! null || dni.length === 8){
        let indice = pacientes.indexOf(dni)
        console.log(indice)
        if(indice ==! -1){
            menu();
        }else{
            alert("No esta registrado como paciente");
            let respuesta = confirm("Quiere registrarse?")
            if(respuesta){
                agregarPaciente();
            }else{
                mensajeDespedida();
            }

        }
    }else{
        mensajeError();
        existePaciente();
    }

}


existePaciente();