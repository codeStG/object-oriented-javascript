/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  
     Create methods that return the values of these private variables in case other pieces of the code need to access 
     the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on 
     the classes, without directly manipulating the values themselves. */

//your code here...

class Book {
    #author = ''
    #publisher = ''

    constructor(author, publisher) {
        this.#author = author;
        this.#publisher = publisher;
    }

    getAuthor() {
        return this.#author;
    }

    setAuthor(author) {
        this.#author = author;
    }

    getPublisher() {
        return this.#publisher;
    }

    setPublisher(publisher) {
        this.#publisher = publisher;
    }



}

// const hungerGames = new Book('Suzanne Collins', 'Scholastic')
// console.log(hungerGames.getAuthor());
// console.log(hungerGames.getPublisher());

// hungerGames.setAuthor('George Torres')
// console.log(hungerGames.getAuthor());

// hungerGames.setPublisher('My mom')
// console.log(hungerGames.getPublisher());

class Author {
    #name = ''
    #books = ''

    constructor(name, books) {
        this.#name = name;
        this.#books = books;
    }

    getName() {
        return this.#name;
    }

    getBooks() {
        return this.#books;
    }

    setName(name) {
        this.#name = name;
    }

    setBooks(books) {
        this.#books = books;
    }

}

// const suzanneCollins = new Author('Suzanne Collins', 'Hunger Games')
// console.log(suzanneCollins.getName());
// console.log(suzanneCollins.getBooks());

// suzanneCollins.setName('George Torres')
// console.log(suzanneCollins.getName());

// suzanneCollins.setBooks('I dont like those')
// console.log(suzanneCollins.getBooks());

class Publisher {
    #authors = ''
    #books = ''

    constructor(authors, books) {
        this.#authors = authors;
        this.#books = books;
    }

    getAuthors() {
        return this.#authors;
    }

    getBooks() {
        return this.#books;
    }

    setAuthors(authors) {
        this.#authors = authors;
    }

    setBooks(books) {
        this.#books = books;
    }

}

// const scholastic = new Publisher('Suzanne Collins', 'Hunger Games')
// console.log(scholastic.getAuthors());
// console.log(scholastic.getBooks());

// scholastic.setAuthors('George Torres')
// console.log(scholastic.getAuthors());

// scholastic.setBooks('I dont like those')
// console.log(scholastic.getBooks());

class Review {
    #rating = 0
    #user = ''

    constructor(rating, user) {
        this.#rating = rating;
        this.#user = user;
    }

    getRating() {
        return this.#rating;
    }

    getUser() {
        return this.#user;
    }

    setRating(rating) {
        this.#rating = rating;
    }

    setUser(user) {
        this.#user = user;
    }
}

// const good = new Review(5, 'George Torres')
// console.log(good.getRating());
// console.log(good.getUser());

// good.setRating(4)
// console.log(good.getRating());

// good.setUser('Someone Else')
// console.log(good.getUser());




/******************************************************************************************************************************************
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.
      Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different
      companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a
      child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee
      instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer,
      1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense,
      considering what the classes are supposed to be representing. */



//your code here...

class Umbrella {

    constructor(org, orgHq, numOfCompanies) {
        this.org = org;
        this.orgHq = orgHq;
        this.numOfCompanies = numOfCompanies;
    }

    displayOrg() {
        console.log(`The umbrella organization is ${this.org}`)
    }

    displayHq() {
        console.log(`${this.org}'s headquarters is located in ${this.orgHq}.`)
    }

    getOrg() {
        return this.org;
    }
}

class Company extends Umbrella {

    constructor(org, orgHq, numOfCompanies, colors, name, numOfEmps, revenue) {
        super(org, orgHq, numOfCompanies)
        this.colors = colors;
        this.name = name;
        this.numOfEmps = numOfEmps;
        this.revenue = revenue;
    }


    displayCompany() {
        console.log(`${this.name} belongs to the parent company ${this.org}`)
    }

    displayRevenue() {
        console.log(`${this.name} made $${this.revenue} billion dollars in revenue last year.`)
    }
}

class Site extends Company {

    constructor(org, orgHq, numOfCompanies, colors, name, numOfEmps, revenue, location, construction, established) {
        super(org, orgHq, numOfCompanies, colors, name, numOfEmps, revenue)
        this.location = location;
        this.construction = construction;
        this.established = established;
    }

    displayEstablished() {
        console.log(`${this.name}'s ${this.location} location was established in ${this.established}.`)
    }

    queryConstruction() {
        if (this.construction != true) {
            console.log(`${this.name}'s ${this.location} location is not under construction.`)
        } else {
            console.log(`${this.name}'s ${this.location} location is under construction.`)
        }
    }
}

class Employee extends Site {
    constructor(org, orgHq, numOfCompanies, colors, name, numOfEmps, revenue, location, construction, established, employee, title, salary, yearsActive, hireDate) {
        super(org, orgHq, numOfCompanies, colors, name, numOfEmps, revenue, location, construction, established)
        this.employee = employee;
        this.title = title;
        this.salary = salary;
        this.yearsActive = yearsActive;
        this.hireDate = hireDate;
    }

    displayTenure() {
        console.log(`${this.employee} has been with ${this.name} since ${this.hireDate}, totaling ${this.yearsActive} years active.`)
    }

    displayTitle() {
        console.log(`${this.employee} has the title of ${this.title}.`)
    }
}

const google = new Company('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74)
const youtube = new Company('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15)
const waze = new Company('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377)

const googleSite = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Mountain View, CA', false, 1998)
const googleSite2 = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Austin, TX', true, 2019)
const googleSite3 = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Atlanta, GA', true, 2019)

const youtubeSite = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15, 'San Bruno, CA', false, 2005)
const youtubeSite2 = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15, 'New York, NY', false, 2014)
const youtubeSite3 = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15, 'Paris, FR', false, 2015)

const wazeSite = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377, 'Tel Aviv-Yafo', false, 2008)
const wazeSite2 = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377, 'Mountain View, CA', false, 2014)
const wazeSite3 = new Site('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377, 'New York, NY', true, 2018)

//1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.
const ceo = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Mountain View, CA', false, 1998, 'Sundar Pichai', 'CEO', 650000, 4, '10/02/2015')
const manager = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Atlanta, GA', true, 2019, 'David Smith', 'Regional Manager', 95000, 3, '05/07/2017')
const secretary = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377, 'Tel Aviv-Yafo', false, 2008, 'George Torres', 'Secretary', 48000, 3, '06/13/2017')
const engineer = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15, 'San Bruno, CA', false, 2005, 'Sam Johnson', 'Engineer', 84000, 6, '03/18/2014')
const engineer2 = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377, 'Tel Aviv-Yafo', false, 2008, 'Rachel Adams', 'Engineer', 88000, 8, '02/04/2012')
const financialOfficer = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15, 'Paris, FR', false, 2015, 'Jean Paul', 'Financial Officer', 118000, 10, '01/08/2010')
const janitor = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue and white', 'Waze', 159, 0.0377, 'Mountain View, CA', false, 2014, 'Jacob Kale', 'Janitor', 42000, 7, '08/09/2012')
const marketer = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Atlanta, GA', true, 2019, 'Roberta Zamudio', 'Marketer', 78000, 5, '09/10/2014')
const hrRep = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'red and white', 'YouTube', 1121, 15, 'San Bruno, CA', false, 2005, 'Jane Mitchel', 'Human Resources Representative', 58000, 2, '01/01/2018')
const lawyer = new Employee('Alphabet Inc.', 'Mountain View, CA', 5, 'blue, red, yellow, and green', 'Google', 119000, 160.74, 'Mountain View, CA', false, 1998, 'David Drummond', 'Lawyer', 130000, 8, '05/07/2012')

ceo.displayTenure()
manager.displayTenure()
secretary.displayTenure()
engineer.displayTenure()
engineer2.displayTenure()
financialOfficer.displayTenure()
janitor.displayTenure()
marketer.displayTenure()
hrRep.displayTenure()
lawyer.displayTitle()


/******************************************************************************************************************************************
Bonus Exercise:

3. Building on Exercise 1, Do the following :
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.
This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...