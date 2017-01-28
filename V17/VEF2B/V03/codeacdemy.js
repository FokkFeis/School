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
