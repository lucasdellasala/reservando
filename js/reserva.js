var Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento){
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}

Reserva.prototype.baseReserva = function (){
    return this.cantidadDePersonas*this.precioPorPersona;
}

Reserva.prototype.totalReserva = function (){
    var horaReserva = this.date.getHours();
    var diaReserva = this.date.getDay ();
    var saldo = this.baseReserva();
};


