//Unit 6.
  //1.
    var list = ['siggi','agusta','tolva'];
  //2.
    var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
    console.log(languages[2]);
  //3.
    var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
    console.log(languages.length);
  //4.
    var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
    for(var i = 0; i < languages.length;i++){
      console.log(languages[i]);
    }
//unit 7.
  //Introduction to Objects.
    //1.
      var answer = true;
    //2.
      // Here is an array of multiples of 8. But is it correct?
      var multiplesOfEight = [8,16,24,32,40,58];

      // Test to see if a number from the array is NOT a true
      // multiple of eight. Real multiples will return false.
      var answer = multiplesOfEight[32] % 8 !== 0;
    //3.
      for (var i = 1; i <= 20; i++) {
        var f = i % 3 == 0, b = i % 5 == 0;
        console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
      }
    //4.
      var getReview = function (movie) {
        switch(movie) {
          case "Toy Story 2":
            return "Great story. Mean prospector.";
          case "Finding Nemo":
            return "Cool animation, and funny turtles.";
          case "The Lion King":
            return "Great songs.";
          default:
            return "I don't know!";
        }
      };
    //5.
      console.log("I'm ready for Objects!");
    //6.
      var bob = {};
    //7.
      var Spencer = {
        age: 22,
        country: "United States"
      };
      // make your own object here called me
      var me = {
        age: 20,
        country: "Iceland"
      };
    //8.
      var bob = {
      name: "Bob Smith",
      age: 30
      };
      var susan = {
      name: "Susan Jordan",
      age: 25
      };
      // here we save Bob's information
      var name1 = bob.name;
      var age1 = bob.age;
      // finish this code by saving Susan's information
      var name2 = susan.name;
      var age2 = susan.age;
      //9.
        // Take a look at our next example object, a dog
        var dog = {
        species: "greyhound",
        weight: 60,
        age: 4
        };

        var species = dog["species"];
        // fill in the code to save the weight and age using bracket notation
        var weight = dog["weight"];
        var age = dog["age"];
      //10.
        // Our bob object again, but made using a constructor this time
        var bob = new Object();
        bob.name = "Bob Smith";
        bob.age = 30;
        // Here is susan1, in literal notation
        var susan1 = {
          name: "Susan Jordan",
          age: 24
        };
        // Make a new susan2 object, using a constructor instead
        var susan2 = new Object();
        susan2.name = "Susan Jordan";
        susan2.age = 24;
      //11.
        // help us make snoopy using literal notation
        // Remember snoopy is a "beagle" and is 10 years old.
        var snoopy = {
        species: "beagle",
        age: 10
        };

        // help make buddy using constructor notation
        // buddy is a "golden retriever" and is 5 years old
        var buddy = new Object();
        buddy.species = "golden retriever";
        buddy.age = 5;
      //12.
        var bicycle = {
          speed: 0,
          gear: 1,
          frame_material:"carbon fiber"
        };
      //13.
        // Accepts a number x as input and returns its square
        var square = function (x) {
        return x * x;
        };

        // Write the function multiply below
        // It should take two parameters and return the product
        var multiply = function (x,y) {
          return x * y;
        };

        console.log(multiply(1,2));
      //14.
        // here is bob again, with his usual properties
        var bob = new Object();
        bob.name = "Bob Smith";
        bob.age = 30;
        // this time we have added a method, setAge
        bob.setAge = function (newAge){
        bob.age = newAge;
        };
        // here we set bob's age to 40
        bob.setAge(40);
        // bob's feeling old.  Use our method to set bob's age to 20
        bob.setAge(20);
      //15.
        // here we define our method using "this", before we even introduce bob
        var setAge = function (newAge) {
        this.age = newAge;
        };
        // now we make bob
        var bob = new Object();
        bob.age = 30;
        // and down here we just use the method we already made
        bob.setAge = setAge;

        // change bob's age to 50 here
        bob.setAge(50);
      //16.
        // here we define our method using "this", before we even introduce bob
        var setAge = function (newAge) {
          this.age = newAge;
        };
        // now we make bob
        var bob = new Object();
        bob.age = 30;
        bob.setAge = setAge;

        // make susan here, and first give her an age of 25
          var susan = new Object();
          susan.age = 25;
          susan.setAge = setAge;
        // here, update Susan's age to 35 using the method
          susan.setAge(35);
      //17.
        var rectangle = new Object();
        rectangle.height = 3;
        rectangle.width = 4;
        // here is our method to set the height
        rectangle.setHeight = function (newHeight) {
        this.height = newHeight;
        };
        // help by finishing this method
        rectangle.setWidth = function (newWidth) {
          this.width = newWidth;
        };

        // here change the width to 8 and height to 6 using our new methods
        rectangle.setHeight(6);
        rectangle.setWidth(8);
      //18.
        var square = new Object();
        square.sideLength = 6;
        square.calcPerimeter = function() {
        return this.sideLength * 4;
        };
        // help us define an area method here
        square.calcArea = function() {
          return this.sideLength * this.sideLength;
        };

        var p = square.calcPerimeter();
        var a = square.calcArea();
      //19.
        // here we make bob using the Object constructor
        var bob = new Object();
        bob.name = "Bob Smith";
        // add bob's age here and set it equal to 20
        bob.age = 20;
      //20.
        function Person(name,age) {
        this.name = name;
        this.age = age;
        }

        // Let's make bob and susan again, using our constructor
        var bob = new Person("Bob Smith", 30);
        var susan = new Person("Susan Jordan", 25);
        // help us make george, whose name is "George Washington" and age is 275
        var george = new Person("George Washington",275);
      //21.
        function Cat(age, color) {
        this.age = age;
        this.color = color;
        }

        // make a Dog constructor here
        function Dog(age, color, name) {
          this.age = age;
          this.color = color;
          this.name = name;
        }
      //22.
        function Person(name,age) {
        this.name = name;
        this.age = age;
        this.species = "Homo Sapiens";
        }

        var sally = new Person("Sally Bowles", 39);
        var holden =  new Person("Holden Caulfield", 16);
        console.log("sally's species is " + sally.species + " and she is " + sally.age);
        console.log("holden's species is " + holden.species + " and he is " + holden.age);
      //23.
        function Rectangle(height, width) {
        this.height = height;
        this.width = width;
        this.calcArea = function() {
            return this.height * this.width;
        };
        // put our perimeter function here!
        this.calcPerimeter = function() {
          return 2*(this.height + this.width);
        };
        }

        var rex = new Rectangle(7,3);
        var area = rex.calcArea();
        var perimeter = rex.calcPerimeter();
      //24.
      function Rabbit(adjective) {
        this.adjective = adjective;
        this.describeMyself = function() {
            console.log("I am a " + this.adjective + " rabbit");
        };
      }

      // now we can easily make all of our rabbits
      var rabbit1 = new Rabbit("fluffy");
      var rabbit2 = new Rabbit("happy");
      var rabbit3 = new Rabbit("sleepy");
      rabbit1.describeMyself();
      rabbit2.describeMyself();
      rabbit3.describeMyself();
      //25.
        // Our person constructor
        function Person (name, age) {
            this.name = name;
            this.age = age;
        }

        // Now we can make an array of people
        var family = new Array();
        family[0] = new Person("alice", 40);
        family[1] = new Person("bob", 42);
        family[2] = new Person("michelle", 8);
        // add the last family member, "timmy", who is 6 years old
        family[3] = new Person("timmy",6);
      //26.
        // Our Person constructor
        function Person (name, age) {
          this.name = name;
          this.age = age;
        }

        // Now we can make an array of people
        var family = new Array();
        family[0] = new Person("alice", 40);
        family[1] = new Person("bob", 42);
        family[2] = new Person("michelle", 8);
        family[3] = new Person("timmy",6);
        // loop through our new array
        for(var i = 0; i <family.length;i++){
          console.log("My name is " + family[i].name);
        }
      //27.
        // Our person constructor
        function Person (name, age) {
          this.name = name;
          this.age = age;
        }

        // We can make a function which takes persons as arguments
        // This one computes the difference in ages between two people
        var ageDifference = function(person1, person2) {
          return person1.age - person2.age;
        };

        var alice = new Person("Alice", 30);
        var billy = new Person("Billy", 25);

        // get the difference in age between alice and billy using our function
        var diff = ageDifference(alice, billy);
      //28.
        // Our person constructor
        function Person (name, age) {
          this.name = name;
          this.age = age;
        }

        // We can make a function which takes persons as arguments
        // This one computes the difference in ages between two people
        var ageDifference = function(person1, person2) {
          return person1.age - person2.age;
        };

        // Make a new function, olderAge, to return the age of
        // the older of two people
        var olderAge = function(person1, person2){
          if(person1.age>person2.age){
            return person1.age;
          }
          else {
            return person2.age;
          }
        };

        // Let's bring back alice and billy to test our new function
        var alice = new Person("Alice", 30);
        var billy = new Person("Billy", 25);

        console.log("The older person is " + olderAge(alice, billy));
      //29.
        var spencer = {
        age: 22,
        country: "United States"
        };

        // make spencer2 here with constructor notation
        var spencer2 = new Object();
        spencer2.age = 22;
        spencer2.country = "United States";
      //30.
        var snoopy = new Object();
        snoopy.species = "beagle";
        snoopy.age = 10;

        // save Snoopy's age and species into variables
        // use dot notation for snoopy's species
        var species = snoopy.species;

        // use bracket notation for snoopy's age
        var age = snoopy["age"];
      //31.
        // 3 lines required to make harry_potter
        var harry_potter = new Object();
        harry_potter.pages = 350;
        harry_potter.author = "J.K. Rowling";

        // A custom constructor for book
        function Book (pages, author) {
          this.pages = pages;
          this.author = author;
        }

        // Use our new constructor to make the_hobbit in one line
        var the_hobbit = new Book(320,"J.R.R. Tolkien");
      //32.
        function Circle (radius) {
        this.radius = radius;
        this.area = function () {
            return Math.PI * this.radius * this.radius;

        };
        // define a perimeter method here
        this.perimeter = function (radius) {
            return 2 * Math.PI * this.radius;
          };
        }
    //Building an address Book.
      //1.
        var bob = {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "(650) 777-777",
          email: "bob.jones@example.com"
        };

        console.log(bob.firstName);
        console.log(bob.lastName);
        console.log(bob.email);
      //2.
        var bob = {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "(650) 777-7777",
          email: "bob.jones@example.com"
        };
        var mary = {
          firstName: "Mary",
          lastName: "Jones",
          phoneNumber: "(650) 888-8888",
          email: "mary.johnsson@example.com"
        };
        var contacts = new Array();
        contacts[0]= bob;
        contacts[1]= mary;
        console.log(contacts[1].phoneNumber);
      //3.
        var bob = {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "(650) 777-7777",
          email: "bob.jones@example.com"
        };
        var mary = {
          firstName: "Mary",
          lastName: "Jones",
          phoneNumber: "(650) 888-8888",
          email: "mary.johnsson@example.com"
        };
        var contacts = [bob, mary];

        // printperson added here
        function printPerson(person){
          console.log(person.firstName + " " + person.lastName);
        }
        printPerson(contacts[0]);
        printPerson(contacts[1]);
      //4.
        var bob = {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "(650) 777-7777",
          email: "bob.jones@example.com"
        };
        var mary = {
          firstName: "Mary",
          lastName: "Jones",
          phoneNumber: "(650) 888-8888",
          email: "mary.johnsson@example.com"
        };
        var contacts = [bob, mary];

        // printperson added here
        function printPerson(person){
          console.log(person.firstName + " " + person.lastName);
        }
        function list(){
          var contactsLength = contacts.length;
          for(var i = 0; i < contactsLength; i++){
            printPerson(contacts[i]);
          }
        }
        list();
      //5
        var bob = {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "(650) 777-7777",
          email: "bob.jones@example.com"
        };

        var mary = {
          firstName: "Mary",
          lastName: "Johnson",
          phoneNumber: "(650) 888-8888",
          email: "mary.johnson@example.com"
        };

        var contacts = [bob, mary];
        var contactsLength = contacts.length;
        function printPerson(person) {
          console.log(person.firstName + " " + person.lastName);
        }

        function list() {
        var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++) {
          printPerson(contacts[i]);
        }
        }

        /*Create a search function
        then call it passing "Jones"*/
        function search(lastName){

          for(var i = 0; i < contactsLength; i++){
            if(contacts[i].lastName == lastName){
                  printPerson(contacts[i]);
              }
          }
        }
        search("Jones");
      //6.
        var bob = {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "(650) 777-7777",
          email: "bob.jones@example.com"
        };

        var mary = {
          firstName: "Mary",
          lastName: "Johnson",
          phoneNumber: "(650) 888-8888",
          email: "mary.johnson@example.com"
        };

        var contacts = [bob, mary];
        var contactsLength = contacts.length;
        function printPerson(person) {
          console.log(person.firstName + " " + person.lastName);
        }

        function list() {
        var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++) {
          printPerson(contacts[i]);
        }
        }

        /*Create a search function
        then call it passing "Jones"*/
        function search(lastName){

          for(var i = 0; i < contactsLength; i++){
            if(contacts[i].lastName == lastName){
                  printPerson(contacts[i]);
              }
          }
        }

        function add(firstName, lastName, email, phoneNumber){
          var person = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              phoneNumber: phoneNumber
          };
          contacts[contactsLength] = person;
        }
        add("Sigurdur", "Baldvin","siggi@example.com","581-2345");
        list();
    //Introduction to Objects II.
      //1.
        var james = {
          // add properties to this object!
          job: "programmer",
          married: false

        };

        function Person(job, married) {
          this.job = job;
          this.married = married;
        }

        // create a "gabby" object using the Person constructor!
        var gabby = new Person("student", true);
      //2.
        function Person(job, married) {
            this.job = job;
            this.married = married;
            // add a "speak" method to Person!
            this.speak = function(){
                console.log("Hello!");
            };
        }

        var user = new Person("Codecademy Student",false);
        user.speak();
      //3.
