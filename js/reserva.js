var Reserva = function(date, cantidadDePersonas, precioPorPersona, codigoDeDescuento){
    this.date = date;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}

Reserva.prototype.baseReserva = function (){
    return this.cantidadDePersonas*this.precioPorPersona;
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
Reserva.prototype.descuento = function (){
    var totalDescuentos = 0;
    var descuento1 = descuentoPorCantidad(this.cantidadDePersonas, this.precioPorPersona);
    var descuento2 = descuentoPorCodigo(this.cantidadDePersonas, this.precioPorPersona, this.codigoDeDescuento);
    
    totalDescuentos = descuento1 + descuento2;

    return totalDescuentos;
}

function adicionalPorHorario (date, cantidadDePersonas, precioPorPersona){
    var horaReserva = date.getHours();
    var porcentual = 0;
    var saldo = cantidadDePersonas * precioPorPersona;

    if ((horaReserva>=13&&horaReserva<=14) || (horaReserva>=20&&horaReserva<=21)){
        porcentual = saldo*0.05;
    }
    return porcentual;
}
function adicionalPorFinde (date, cantidadDePersonas, precioPorPersona){
    var dia = date.getDay();
    var porcentual = 0;
    var saldo = cantidadDePersonas * precioPorPersona;

    if (dia===0||dia===5||dia===6){
        porcentual = saldo*0.10;
    }
    
    return porcentual;
}
Reserva.prototype.adicional = function (){
    var totalAdicional = 0;
    var adicional1 = adicionalPorHorario(this.date, this.cantidadDePersonas, this.precioPorPersona);
    var adicional2 = adicionalPorFinde(this.date, this.cantidadDePersonas, this.precioPorPersona);
    
    totalAdicional = adicional1 + adicional2;
 
    return totalAdicional;
}

Reserva.prototype.totalReserva = function (){
    var saldo = this.baseReserva();
    var adicionales = this.adicional();
    var descuentos = this.descuento();

    var precioFinal = saldo + adicionales - descuentos;

    return precioFinal;
};

