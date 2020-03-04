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

//Obtener restaurante