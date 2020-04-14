var Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento){
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}

function descuentoPorCantidad (cantidadDePersonas, precioPorPersona){
    var porcentual = 0;
    var saldo = cantidadDePersonas * precioPorPersona;

    if (cantidadDePersonas<=6 && cantidadDePersonas>=4){
        porcentual = saldo*0.05;
    } else if (cantidadDePersonas<=8 && cantidadDePersonas>=7) {
        porcentual = saldo*0.10;
    } else if (cantidadDePersonas>8) {
        porcentual = saldo*0.15;
    }
    
    return porcentual;
}

function descuentoPorCodigo (cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    var saldo = cantidadDePersonas * precioPorPersona;
    console.log(saldo);
    switch (codigoDeDescuento) {
        case "DES15":
            descuentoPorCodigo = saldo*0.15;
        case "DES200":
            descuentoPorCodigo = 200;
        case "DES1":
            descuentoPorCodigo = precioPorPersona;
    }

    return descuentoPorCodigo;
}

Reserva.prototype.baseReserva = function (){
    return this.cantidadDePersonas*this.precioPorPersona;
}
Reserva.prototype.descuento = function (){
    var totalDescuentos = 0;
    var descuento1 = descuentoPorCantidad(this.cantidadDePersonas, this.precioPorPersona);
    var descuento2 = descuentoPorCodigo(this.cantidadDePersonas, this.precioPorPersona, this.codigoDeDescuento);
    
    totalDescuentos = descuento1 + descuento2;

    return totalDescuentos;
}
Reserva.prototype.totalReserva = function (){
    // var horaReserva = this.date.getHours();
    // var diaReserva = this.date.getDay ();
    var saldo = this.baseReserva();
    var adicionales = 0;

    var totalDescuentos = this.descuento();

    var precioFinal = saldo + adicionales - totalDescuentos;

    return precioFinal;
};

