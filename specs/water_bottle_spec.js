var assert = require('assert');
var water_bottle = require('../water_bottle');

describe ('water_bottle', function(){


  it('should be empty', function(){
    assert.equal(0 , water_bottle.waterLevel);
  });

  it('should get filled', function(){
    assert.equal(100 , water_bottle.fillBottle());
  });

  it('should get drunk', function(){
    assert.equal(90 , water_bottle.drink());
  });

  it('should go to zero when emptied', function(){
    assert.equal(0, water_bottle.empty());
  });

  it('shouldnt go below zero', function(){
    water_bottle.empty();
    assert.equal("you cant have negative water go to the tap you filthy animal", water_bottle.drink());
  });


});

