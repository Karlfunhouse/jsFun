/* eslint-disable */
const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        // console.log('A', personB) //Ben

        if (personB.includes('B')) {
          personB = person; //B = CardiB
          personC = personB; //C = CardiB
          // Log B: personC
          // console.log('B', personC) //CardiB
        }
      }

      personC = personA; //C = Paul

      // Log C: personB
      // console.log('C', personB); //CardiB
    }

    changePerson();

    // Log D: personC
    // console.log('D', personC); //C = Paul

    const result = [{A: 'Ben'}, {B: 'CardiB'}, {C: 'CardiB'}, {D: 'Paul'}]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number
      console.log('A', number); //75

      function newNumber() {
        number = 64;

        // Log B: number
        console.log('B', number);  //64

      }

      newNumber();

      // Log C: number
      console.log('C', number);  //64

    }

    numberFunction();

    // Log D: number
    console.log('D', number); //30


    const result = [{A: 75}, {B: 64}, {C: 64}, {D: 30}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting
      console.log('A', greeting); //Yo

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
        console.log('B', greeting); //Hey

      }

      newPhrase();

      // Log C: greeting
      console.log('C', greeting);//Hey

    }

    greetingFunction();

    // Log D: greeting
    console.log('D', greeting);//Hello


    const result = [{A: 'Yo'}, {B: 'Hey'}, {C: 'Hey'}, {D: 'Hello'}]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi'; //hi

      if (greeting === 'hi') {
        let greeting = 'hello'; //hi
      }

      // Log A: greeting //hello

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting //welcome
      };

      newGreeting();

      // Log C: greeting //welcome
    };

    greetingGenerator();

    // Log D: greeting //howdy

    const result = [{A: 'hi'}, {B: 'welcome'}, {C: 'welcome'}, {D: 'howdy'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name Nathaniel
      }

      // Log B: name Nathaniel
    }

    // Log C: name Brittany

    sayName();

    // Log D: name Brittany

    const result = [{C: 'Brittany'}, {A: 'Nathaniel'}, {B: 'Nathaniel'}, {D: 'Brittany'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog 'Spot'

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog 'Spot'

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [{A: 'Spot'}, {B: 'Spot'}, {C: 'Biscuit'}, {D: 'Biscuit'}, {E: 'Biscuit'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit reference error
          const fruit = 'strawberry';
        }

        // Log B: fruit mango
      }

      // Log C: fruit mango
    }

    eatFruit();

    // Log D: fruit apple

    const result = [{A: 'reference error'}, {B: 'mango'}, {C: 'mango'}, {D: 'apple'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;


      // Log A: 4

      if (num < 5) {
        const num = 9;

        fn2(num); //

        const newNum = num;

        // Log B: newNum 9
      }

      newNum = num;

      // Log C: newNum 4
    };

    const fn2 = function(num){
      // Log D: num 9

      num = num + 1;

      // Log E: num 10
    };

    fn1();

    const result = [{A: 4}, {D: 9}, {E: 10}, {B: 9}, {C: 4}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [{A: 75}, {B: 0}, {C: 75}, {D: 80}, {A: 55}, {B: 0}, {C: 55}, {E: 55}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings reference error
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich not a mediocre sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping gouda

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich not a mediocre sandwich
    // Log F: amandaBynes national treasure

    const result = [{A: 'ketchup sandwich'}, {D: 'gouda'}, {B: undefined}, {C: 'not a mediocre sandwich'}, {E: 'not a mediocre sandwich'}, {F: 'National Treasure'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [{A: 7}, {B: 7}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [{A: 95}, {B: 90}, {C: 90}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num 5
      num = 6;
      // Log B: num 6
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [{A: 5}, {B: 6}, {C: 'reference error'}, {D: 6}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor Pam

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor Louisa
      }

      rename();

      // Log D: instructor Louisa

    }

    // Log E: instructor Pam

    changeInstructor();

    // Log F: instructor Louisa

    const result = [{E: 'Pam'}, {A: 'Pam'}, {B: 'Pam'}, {C: 'Louisa'}, {D: 'Louisa'}, {F: 'Louisa'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [{B: 'flipflop'}, {A: undefined}, {C: 'flipflop'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [{B: 'soup'}, {C: 'soup'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid Pandora
      wildKids.push(kid);
      // Log B: wildKids ['Antigone', 'Pandora']

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid Antigone
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [{A: 'Pandora'}, {B: ['Antigone', 'Pandora']}, {C: 'Mandy'}, {D: 'Antigone'}, {E: 'Pandora'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName RodyToy

      let innerFunc = () => {
        let myName = 'Tesla';
        // Log C: myName Tesla
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = [{A: 'Rody'}, {B: 'RodyToy'}, {C: 'Tesla'}, {D: 'RodyToyDaniels'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;
