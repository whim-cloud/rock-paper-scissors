var prompt = require('prompt');

var schema = {
  properties: {
    weapon: {
      pattern: /[1-3]/,
      message: 'must be 1, 2 or 3 only',
      required: true
    }
  }
}

prompt.start();

console.log("Choose a weapon, Rock (1), Paper(2), Scissors(3)".green);
prompt.get(schema, function (err, res){
  var userWeapon = res.weapon;
  var aiWeapon   = Math.floor(Math.random() * 3) + 1;
  console.log('computer picked: ' + aiWeapon);
  var d = (3 + userWeapon - aiWeapon) % 3;
  if(d === 0)
    console.log('tie')
  else if (d % 2 === 1)
    console.log('user wins')
  else if (d % 2 === 0)
    console.log('computer wins')

});
