var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Mars");
      expect(zoo.location).toEqual("Mars");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.status = "closed";
      zoo.open();
      expect(zoo.status).toBe("Open!");
    });
  });

  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.status = "Open!";
    expect(zoo.isOpen()).toBe("Open!");
    });

    it('should see if the zoo is closed', function(){
      zoo.isOpen();
      expect(zoo.status).toBe("Closed!");
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
    expect(zoo.animals).toEqual([]);
  });
});

  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal(pig)).toBe(false);
    });

    it('should add an animal to the animals array', function(){
      zoo.open();
      expect(zoo.addAnimal(lion)).toBe(true);
    });

    it('should only add instances of animals', function(){
      expect(zoo.addAnimal('pig')).toBe(false);
    });

    it('should not add duplicates', function(){
      expect (zoo.addAnimal(pig)).toBe(false);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      // add spec
    });
  });
});
