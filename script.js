'use strict';
/*
const Person = function(firstName, birthYear){
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

}

const hanson = new Person('Hanson', 1985);
console.log(hanson); // Person {firstName: "Hanson", birthYear: 1985}

// 1. new {} is created
// 2. function is called. this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2000);
const jack = new Person('Jack', 1970);
console.log(matilda);
console.log(jack);

console.log(hanson instanceof Person); // true

Person.hey = function(){
    console.log('Hey there 👋');
    console.log(this);
}
Person.hey();

// prototypes 
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2020-this.birthYear);
};

hanson.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(hanson.__proto__);
console.log(hanson.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(hanson));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapience';
console.log(hanson.species, matilda.species); // Homo Sapience Homo Sapience

console.log(hanson.hasOwnProperty('firstName')); // true
console.log(hanson.hasOwnProperty('species')); // false

console.log(hanson.__proto__);
// Object.prototype (top of prototype chain)
console.log(hanson.__proto__.__proto__);
console.log(hanson.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3,3,5,1,9,9,1,0,2] // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique()); // [3, 5, 1, 9, 0, 2]

const h1 = document.querySelector('h1');
console.dir(x => x +1);

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'.
A car has a 'make' and a 'speed' property.
The 'speed' property is the current speed of the car in km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
*/
/*
const Car = function(make, speed){
    // Instance properties
    this.make = make;
    this.speed = speed;
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);


Car.prototype.accelerate = function(){
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function(){
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed}`);
};

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

*/

// class expression
// const PersonCl = class {}

// class declaration
/*
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // methods will be added to .prototype property
    calcAge(){
        console.log(2020-this.birthYear);
    }

    greet(){
        console.log(`Hey how are you ${this.firstName}`);
    }

    get age(){
        return 2020 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name){
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullname(){
        return this._fullName;
    }

    // static method
    static hey(){
        console.log('Hey there! 👋');
    }
}


// const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge(); // 24
console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// 1. classes are not hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode 

const walter = new PersonCl('Walter white', 1965)
PersonCl.hey();
const account = {
    owner : 'hanson',
    movements : [200, 300, 500, 40],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);



const PersonProto = {
    calcAge(){
        console.log(2020-this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1999;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1990)
sarah.calcAge();
console.log(sarah);
*/
/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h(divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h(but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h GOOD LUCK 😀
*/
/*
class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    // set a property that already exists
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going ${this.speed}`);
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going ${this.speed}`);
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/*
const Person = function(firstName, birthYear){
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2020-this.birthYear);
};

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear)
    this.course = course;
}
// linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2002, 'Computer Science')
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an ElectricCar (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

/*
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function(){
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

// link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);

}


const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.brake();

tesla.accelerate();
*/
/*
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // methods will be added to .prototype property
    calcAge(){
        console.log(2020-this.birthYear);
    }

    greet(){
        console.log(`Hey how are you ${this.firstName}`);
    }

    get age(){
        return 2020 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name){
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullname(){
        return this._fullName;
    }

    // static method
    static hey(){
        console.log('Hey there! 👋');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        // always needs to happen first!
        super(fullName, birthYear)
        this.course = course;
    }

    introduce(){
        console.log(`my name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge(){
        console.log(`I'm ${2025 - this.birthYear} yrs old`);
    }
}

// const martha = new StudentCl('Martha Jones', 2012)
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.introduce();
martha.calcAge();
*/

/*
const PersonProto = {
    calcAge() {
        console.log(2025 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science')
jay.introduce();
jay.calcAge();
*/

// 1) public fields 
// 2) private fields
// 3) public methods
// 4) private methods
// (there is also the static version)

class Account {
    // 1) public fields (instances)
    local = navigator.language;  
    
    // 2) private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        // protected property _
        this.#pin = pin;
        // this._movements = [];
        // this.local = navigator.language;

        console.log(`Thanks for opening account, ${owner}`);
    }

    // 3) public methods
    // public interface
    getMovements(){
        return this.#movements
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 4) private methods
    _approveLoan(val){
        return true;
    }

    static helper(){
        console.log('helper');
    }

}

const acc1 = new Account('Hanson', 'USD', 1111, []);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(140)
acc1.requestLoan(1000)
console.log(acc1.getMovements());
console.log(acc1);
Account.helper()
// console.log(acc1.#approveLoan(1000));
// console.log(acc1.#pin); // Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class
// console.log(acc1.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class

// chaining 
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());


/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes : create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% GOOD LUCK 
*/
class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brake(){
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this
    };

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

class EVCL extends CarCl{
    #charge;
    constructor(make, speed, charge){
        super(make, speed)
        this.#charge = charge;
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);