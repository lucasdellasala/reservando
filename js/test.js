var expect = chai.expect;
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
});
