// Створення об'єкта car1 з використанням new Object()
let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = {
    name: "Nazar",
    experience: 5
};
car1.tuning = true;
car1.numberOfAccidents = 2;

// Додавання методу drive для car1
car1.drive = function() {
    console.log("I am not driving at night");
};

// Створення об'єкта car2 з використанням літерала об'єкта
let car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Olga",
        experience: 3
    },
    tuning: false,
    numberOfAccidents: 0,
    drive: function() {
        console.log("I can drive anytime");
    }
};

// Виклик методу drive для car1 і car2
car1.drive(); // Виведе: "I am not driving at night"
car2.drive(); // Виведе: "I can drive anytime"

// Конструктор функції Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

// Додавання статичного методу AssignDriver до Truck через prototype
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// Додавання методу trip всередині Truck
Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        console.log(`Driver: ${this.driver.name}, Night Driving: ${this.driver.nightDriving}, Experience: ${this.driver.experience} years`);
    }
};

// Створення двох об'єктів Truck і призначення одного з них водія
let truck1 = new Truck("white", 5000, 90, "Volvo", "FH16");
let truck2 = new Truck("black", 6000, 85, "MAN", "TGX");

truck1.AssignDriver("Petro", true, 10); // Водій з можливістю нічного водіння
truck2.AssignDriver("Oleh", false, 5);  // Водій без нічного водіння

// Виклик методу trip для обох об'єктів Truck
truck1.trip(); // Виведе: інформацію про водія з можливістю нічного водіння
truck2.trip(); // Виведе: інформацію про водія без можливості нічного водіння

// Клас Square
class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
    perimeter() {
        return this.side * 4;
    }
    static help() {
        return "Square має лише одну сторону, всі сторони рівні.";
    }
    info() {
        console.log(`Square: side = ${this.side}, area = ${this.area()}, perimeter = ${this.perimeter()}`);
    }
}

// Клас Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
    static help() {
        return "Rectangle має різні довжину та ширину.";
    }
    info() {
        console.log(`Rectangle: width = ${this.width}, height = ${this.height}, area = ${this.area()}, perimeter = ${this.perimeter()}`);
    }
}

// Клас Rhombus
class Rhombus {
    constructor(side, angle) {
        this.side = side;
        this.angle = angle;
    }
    area() {
        return this.side ** 2 * Math.sin(this.angle);
    }
    perimeter() {
        return this.side * 4;
    }
    static help() {
        return "Rhombus має всі сторони рівні, але кути можуть бути різними.";
    }
    info() {
        console.log(`Rhombus: side = ${this.side}, angle = ${this.angle}, area = ${this.area()}, perimeter = ${this.perimeter()}`);
    }
}

// Клас Parallelogram
class Parallelogram {
    constructor(base, side, height) {
        this.base = base;
        this.side = side;
        this.height = height;
    }
    area() {
        return this.base * this.height;
    }
    perimeter() {
        return 2 * (this.base + this.side);
    }
    static help() {
        return "Parallelogram має дві пари паралельних сторін.";
    }
    info() {
        console.log(`Parallelogram: base = ${this.base}, side = ${this.side}, height = ${this.height}, area = ${this.area()}, perimeter = ${this.perimeter()}`);
    }
}

// Функція Triangular для створення об'єкта трикутника
function Triangular(a, b, c) {
    return { a: a, b: b, c: c };
}

// Функція PiMultiplier
function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}

// Функція Painter
function Painter(color) {
    return function(object) {
        if (object.type) {
            console.log(`Color: ${color}, Type: ${object.type}`);
        } else {
            console.log(`Color: ${color}, Type property is missing`);
        }
    };
}
