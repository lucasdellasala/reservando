var expect = chai.expect;

//Reservar horario
describe('Test de la función reservarHorario', function() {
    it("Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        // Ejecutar metodos que se quieren testear
        restaurant.reservarHorario("13:00");
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(undefined).to.equal(restaurant.horarios.find(x => x == "13:00"));
        expect(2).to.equal(restaurant.horarios.length);
    });
    it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const arrayHorariosOriginal = ["13:00", "15:30", "18:00"];
            // Ejecutar metodos que se quieren testear
        restaurant.reservarHorario("00:00");
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(arrayHorariosOriginal.length).to.equal(restaurant.horarios.length);
        expect(3).to.equal(restaurant.horarios.length);
    });
    it("Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const arrayHorariosOriginal = ["13:00", "15:30", "18:00"];
        // Ejecutar metodos que se quieren testear
        restaurant.reservarHorario();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(arrayHorariosOriginal.length).to.equal(restaurant.horarios.length);
        expect(3).to.equal(restaurant.horarios.length);
    });
});

//Obtener puntuación
describe('Test de la función obtenerPuntuación', function() {
    it("Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const puntuacionManual = ((6+7+9+10+5)/5);
        // Ejecutar metodos que se quieren testear
        const puntuacionMetodo = restaurant.obtenerPuntuacion();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(puntuacionManual).to.equal(puntuacionMetodo);
    });
    it("Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [])
        // Ejecutar metodos que se quieren testear
        const puntuacionMetodo = restaurant.obtenerPuntuacion();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(0).to.equal(puntuacionMetodo);
    });
});

//Calificar
describe('Test de la función calificar', function() {
    it("No permite calificar con un string", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const calificacionesOriginal = [6, 7, 9, 10, 5];
        // Ejecutar metodos que se quieren testear
        restaurant.calificar("bla");
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(calificacionesOriginal.length).to.equal(restaurant.calificaciones.length);
        expect(undefined).to.equal(restaurant.calificaciones.find(x => x == "bla"));
    });
    it("No permite calificar sin ningún valor (vacío)", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const calificacionesOriginal = [6, 7, 9, 10, 5];
        // Ejecutar metodos que se quieren testear
        restaurant.calificar();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(calificacionesOriginal.length).to.equal(restaurant.calificaciones.length);
    });
    it("No permite calificar con un número negativo", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const calificacionesOriginal = [6, 7, 9, 10, 5];
        // Ejecutar metodos que se quieren testear
        restaurant.calificar(-1);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(calificacionesOriginal.length).to.equal(restaurant.calificaciones.length);
        expect(undefined).to.equal(restaurant.calificaciones.find(x => x == -1));
    });
    it("No permite calificar con un número mayor que 10", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const calificacionesOriginal = [6, 7, 9, 10, 5];
        // Ejecutar metodos que se quieren testear
        restaurant.calificar(11);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(calificacionesOriginal.length).to.equal(restaurant.calificaciones.length);
        expect(undefined).to.equal(restaurant.calificaciones.find(x => x == 11));
    });
    it("Me permite calificar con un número entre 0 y 10", function(){
        // Inicializar variables que contienen los metodos a testear
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        const calificacionesOriginal = [6, 7, 9, 10, 5];
        // Ejecutar metodos que se quieren testear
        restaurant.calificar(3);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(calificacionesOriginal.length + 1).to.equal(restaurant.calificaciones.length);
        expect(3).to.equal(restaurant.calificaciones.find(x => x == 3));
    });
});
//Buscar restaurante (id)
describe('Test de la función buscarRestaurante(id)', function() {
    it("Encuentra el restaurante con id 1", function(){
        // Inicializar variables que contienen los metodos a testear
        let restauranteId1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        // Ejecutar metodos que se quieren testear
        let restauranteId1Metodo = listado.buscarRestaurante(1);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(restauranteId1.id).to.equal(restauranteId1Metodo.id);
        expect(restauranteId1.nombre).to.equal(restauranteId1Metodo.nombre);
        expect(restauranteId1.rubro).to.equal(restauranteId1Metodo.rubro);
        expect(restauranteId1.ubicacion).to.equal(restauranteId1Metodo.ubicacion);
        expect(restauranteId1.horarios.length).to.equal(restauranteId1Metodo.horarios.length);
        expect(restauranteId1.imagen).to.equal(restauranteId1Metodo.imagen);
        expect(restauranteId1.calificaciones.length).to.equal(restauranteId1Metodo.calificaciones.length);
    });
    it("No encuentra el restaurante con id 25", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restauranteId25Metodo = listado.buscarRestaurante(25);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect("No se ha encontrado ningún restaurant").to.equal(restauranteId25Metodo);
    });
    it("No encuentra el restaurante con id vacío", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restauranteIdVacioMetodo = listado.buscarRestaurante();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect("No se ha encontrado ningún restaurant").to.equal(restauranteIdVacioMetodo);
    });
});
//Obtener restaurante
describe('Test de la función obtenerRestaurante', function() {
    it("No obtiene un restaurant con horario 00:00", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restaurantesFiltrados = listado.obtenerRestaurantes(null,null,"00:00");
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(0).to.equal(restaurantesFiltrados.length);
    });
    it("No obtiene un restaurant con ciudad Bariloche", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restaurantesFiltrados = listado.obtenerRestaurantes(null,"Bariloche",null);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(0).to.equal(restaurantesFiltrados.length);
    });
    it("No obtiene un restaurant con rubro Chori", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restaurantesFiltrados = listado.obtenerRestaurantes("Chori",null,null);
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(0).to.equal(restaurantesFiltrados.length);
    });
    it("No obtiene un restaurant con rubro y ciudad existente, pero horario 00:00", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restaurantesFiltrados = listado.obtenerRestaurantes("Asiática","Nueva York","00:00");
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(0).to.equal(restaurantesFiltrados.length);
    });
    it("Encuentra el restaurant TAO Uptown con Nueva York, Asiática y 13:00", function(){
        // Inicializar variables que contienen los metodos a testear
        // Ejecutar metodos que se quieren testear
        let restaurantesFiltrados = listado.obtenerRestaurantes("Asiática","Nueva York","13:00");
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(1).to.equal(restaurantesFiltrados.length);
        expect("TAO Uptown").to.equal(restaurantesFiltrados[0].nombre);
    });    
});

//Test nueva funcionalidad
describe('Test nueva funcionalidad', function() {
    it("Calcula correctamente un precio base", function(){
        // Inicializar variables que contienen los metodos a testear
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        // Ejecutar metodos que se quieren testear
        var precioBase = reserva1.baseReserva();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(2800).to.equal(precioBase);
    });
    it("Calcula correctamente un precio final", function(){
        // Inicializar variables que contienen los metodos a testear
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        // Ejecutar metodos que se quieren testear
        var precioFinal = reserva1.totalReserva();
        // Verificar que el resultado devuelto por la funcion coincida con el resultado esperado
        expect(2450).to.equal(precioFinal);
    });
});


