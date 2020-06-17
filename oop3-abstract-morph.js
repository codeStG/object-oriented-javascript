
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class 
   from being instantiated with an instance.  In the Creature class, include two abstract methods.  
   move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error 
   in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract 
Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, 
each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
    //your code here...

    constructor() {
        if (this.constructor === Creature) {
            throw new Error("Unable to instantiate Abstract Class Creature.");
        }
    }

    act() {
        throw new Error("This is an Abstract Method and cannot be invoked from the Creature Class.")
    };

    move() {
        throw new Error("This is an Abstract Method and cannot be invoked from the Creature Class.")
    }
}

class Human extends Creature {
    //your code here...

    constructor(age, food) {
        super()
        this.age = age;
        this.food = food;
    }

    act() {
        console.log(`Human eats ${this.food}.`)
    }

    move() {
        console.log("Human walks 4 steps.")
    }

    displayAge() {
        console.log(`Human is ${age} years old.`)
    }
}

class Bird extends Creature {

    constructor(ability, color) {
        super()
        this.ability = ability;
        this.color = color;
    }

    act() {
        console.log(`The bird can ${this.ability}.`)
    }

    move() {
        console.log(`The bird flies 4 feet.`)
    }

    displayColor() {
        console.log(`The bird is ${color}`)
    }
}

class Fish extends Creature {

    constructor(name, weight) {
        super()
        this.name = name;
        this.weight = weight;
    }

    act() {
        console.log(`${this.name} swims away.`)
    }

    move() {
        console.log(`The fish swims 6 feet`)
    }

    displayWeight() {
        console.log(`The fish weighs ${this.weight} pounds.`)
    }
}

const human = new Human(28, 'Steak')
human.act()

const bird = new Bird('fly', 'blue')
bird.move()

const fish = new Fish('Catfish', 17)
fish.displayWeight()




/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  
For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to 
you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    code() {
        console.log(this.name + " is coding");
    }

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("I modified all the functions to be declarations so they would be inhereited through dunder proto; that way, when the function is redeclared in the subclass, the new declaration takes precedence.");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {
    //set up your methods in this student class, so all of these methods will override the methods from the super class.
    //eat method should print out - <stduent name> studies, then eats

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " studies, then eats");
    }

    sleep() {
        console.log(this.name + " studies coding so much, that they dream about it in their sleep");
    }

    code = () => {
        console.log(this.name + " was first overwhelmed by coding, but kept at it, and now has become a coding guru!");
    }

    repeat() {
        console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.");
    }
}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    constructor(food1, food2, food3) {
        this.food1 = food1;
        this.food2 = food2;
        this.food3 = food3;
    }

    prepare = function () {
        console.log(`The cook is cooking ${this.food1}, ${this.food2}, and ${this.food3}`);
    }

    explain = () => {
        console.log("The first prepare seems to be the constructor accepting the arguments necessary for the functions (changed it to constructor). I set the incoming arguments to their respective this. props and then used string interpolation to display them when the prepare function is ran. I then passed the arguments into cook at the time of the instance creation and then ran cook.prepare() with no arguments inside since the arguments were passed in at the creation of the instance.");
    }

}

const cook = new Cook("turkey", "salami", "pizza");

cook.prepare();

cook.explain();

