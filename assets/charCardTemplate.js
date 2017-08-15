
var charCardTemplate = function(character) {
  this.name = character.name;
  this.affiliation = character.affiliation;
  this.category = character.category;
  this.hp = character.hp;
  this.attack = character.attack;
  this.speed = character.speed;
  this.location = character.location;

  console.log(name)
  console.log(affiliation)
  console.log(category)
  console.log(hp)
  console.log(attack)
  console.log(speed)
  console.log(location)

}

module.exports = charCardTemplate;
