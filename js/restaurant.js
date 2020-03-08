var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

function hacerSumatoria (arrayDeNumeros){
    var sumatoria = 0;
    sumatoria = arrayDeNumeros.reduce((acumulador, i) => acumulador + i);
    return sumatoria
}
function promediar (sumatoria, n){
    var promedio = sumatoria / n;
    return Math.round(promedio * 10) / 10;
}
Restaurant.prototype.reservarHorario = function(horarioReservado) {
    const horariosRestantes = this.horarios.filter(horario => horario !== horarioReservado);
    this.horarios = horariosRestantes;
    return;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    var n = this.calificaciones.length;
    if (n === 0) {
        return 0;
    } else {
        var sumatoria = hacerSumatoria(this.calificaciones);
        return promediar(sumatoria, n);
    }
}

