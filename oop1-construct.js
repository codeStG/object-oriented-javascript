/* 1. Create a Class called WhyClass.  This class should have one property, and two methods.  
- The property is called "purpose", and stores a string.  This string should clearly explain
why classes are used in Object Oriented Programming.  
- The first method is called explain(). This method should print the contents stored in the purpose 'field' of the class.  
- The second method is called pieces().  This 2nd method should print out the various parts that are 
essential to building a class.  
Instantiate the class, and invoke the method so the results are showing in the console once this file is run. */

//your code here...
class WhyClass {

    constructor(purpose) {
        this.purpose = purpose;
    }

    explain() {
        console.log(this.purpose);
    }

    pieces() {
        console.log("Classes require the class keyword, a constructor that contains the properties, " +
            "state and arguments necessary to instantiate the class and methods that perform necessary actions on properties/state.")
    }
}

const why = new WhyClass("Classes are used in Object Oriented Programming to help model real world objects." +
    " Classes allow for cleaner, more readable and reuasable code.")
why.explain()
why.pieces()



/* 2. You are exploring the rainforests of the Amazon.  You have observed many different 
types of wildlife on your excursion. To jog your memory, some different types of wildlife 
that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species 
Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon. 
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...
class Wildlife {

    constructor(commonName, scientificName, region, action) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.region = region;
        this.action = action;
    }

    ability() {
        console.log("The " + this.commonName + " has the ability to " + this.action + "!");
    }

    sayHello() {
        console.log("The " + this.scientificName + " says hello!");
    }
}

const sloth = new Wildlife("Sloth", "Folivora", "South and Central America", "hang upside down in trees")
sloth.ability()
sloth.sayHello()

const jaguar = new Wildlife("Jaguar", "Panthera onca", "Southwestern US, Mexico, Central America, Paraguay and Northern Argentina", "jump")
jaguar.ability()
jaguar.sayHello()

const squirrelMonkey = new Wildlife("Squirrel Monkey", "Saimiri", "South and Central America", "climb trees")
squirrelMonkey.ability()
squirrelMonkey.sayHello()

const toucan = new Wildlife("Toucan", "Ramphastidae", "South and Central America", "fly")
toucan.ability()
toucan.sayHello()

const capybara = new Wildlife("Capybara", "Hydrochoerus hydrochaeris", "South America", "eat up to 8 pounds of grass per day")
capybara.ability()
capybara.sayHello()

const cougar = new Wildlife("Cougar", "Puma concolor", "From the Canadian Yukon to the southern Andes in South America", "run up to 50 miles per hour")
cougar.ability()
cougar.sayHello()

/* 3. Convert the following Object Literals into a general class called Shape, and instantiate 
the class to generate the object literals
*/


class Shape {
    //your code here...

    constructor(name, sides, height, length, width, radius) {
        this.name = name;
        this.sides = sides;
        this.height = height;
        this.length = length;
        this.width = width;
        this.radius = radius;
    }

    calcTriArea() {
        let x = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;
        let area = (x * (x - this.sides[0]) * (x - this.sides[1]) * (x - this.sides[2]));
        area = Math.sqrt(area).toFixed(2);
        this.height = (2 * (area / this.sides[0]));
        console.log(`${this.name}'s area is calculated to be : ${area}`);
    }

    calcTriHeight() {
        console.log(`${this.name}'s height is calculated to be : ${this.height}`);
    }

    calcTriPerimeter() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.sides[0]) + (this.sides[1] + this.sides[2])}`)
    }

    calcRectArea() {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    }

    calcRectPerimeter() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width)}`)
    }

    calcCircArea() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
    }

    calcCircumference() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }

}

const triangle = new Shape("Triangle", [4, 7, 7], null, null, null, null)
triangle.calcTriArea()
triangle.calcTriHeight()
triangle.calcTriPerimeter()

const rectangle = new Shape("Rectangle", 4, null, 2, 5, null)
rectangle.calcRectArea()
rectangle.calcRectPerimeter()

const circle = new Shape("Circle", 1, null, null, null, 5)
circle.calcCircArea()
circle.calcCircumference()

// const triangle = {
//     name: "triangle",
//     sides: [4, 7, 7], //lengths of each side
//     base: null,
//     height: null, //determine this height using basic geometry.  You may need to research this one.
//     calcArea: function () {
//         console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
//     },
//     calcPerimeter: function () {
//         console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2])}`)
//     }
// }

// triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
// triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

// console.log(triangle);
// triangle.calcArea();
// triangle.calcPerimeter();

// const rectangle = {
//     name: "rectangle",
//     sides: 4,
//     length: 2,
//     width: 5,
//     calcArea: function () {
//         console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
//     },
//     calcPerimeter: function () {
//         console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width)}`)
//     }
// }

// console.log(rectangle);
// rectangle.calcArea();
// rectangle.calcPerimeter();

// const circle = {
//     name: "circle",
//     sides: 1,
//     radius: 5,
//     calcArea: function () {
//         console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
//     },
//     calcCircumference: function () {
//         console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
//     }
// }

// console.log(circle);
// circle.calcCircumference();
// circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  
comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, 
as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, 
you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided 
for you in the triangle object literal.

//I used a formula to find the height in part 3 for this bonus.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known 
Earth, we don't want multiple instances of Earth.  Modify the class so the properties are usuable WITHOUT 
instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name, num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth', 3);
console.log(earth);




