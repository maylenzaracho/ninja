class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 90;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Mi nombre es ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} bebió sake y ganó 10 puntos de salud. Salud total: ${this.salud}`);
    }
}

const nombreUsuario = "May"; //Acá ponés el nombre que quieras usar
const ninjaUsuario = new Ninja(nombreUsuario);
ninjaUsuario.sayName();
ninjaUsuario.showStats();
ninjaUsuario.drinkSake();
