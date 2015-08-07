function Animal(name, age, kind, awake){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function(){
   this.age++;
   return this.age;
};

Animal.prototype.feed = function() {
  if (this.awake)
  return "NOM NOM NOM";
return "The animal is sleeping.";
};

Animal.prototype.wakeUp = function() {
  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function() {
  this.awake = false;
  return this.awake;
};

module.exports = Animal;
