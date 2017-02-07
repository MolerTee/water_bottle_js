var assert = require('assert');
var water_bottle = require('../water_bottle');
var athlete = require('../athlete');

describe('Athlete', function(){

  it('should have hydrationLevel of 100', function(){
    assert.equal(100, athlete.hydrationLevel);
  });

  it('should have distance covered starting at 0', function(){
    assert.equal(0, athlete.distanceTraveled);
  });

  it('should decrease hydration and increase distance', function(){
    athlete.run();
    assert.equal(90, athlete.hydrationLevel);
    assert.equal(10, athlete.distanceTraveled);
  });

  it('should not be able to run when dehydrated', function(){
    athlete.hydrationLevel = 0;
    assert.equal("im pooped", athlete.run());
  });

  it('should be able to drink from water bottle', function(){
    athlete.drink();
    water_bottle.fillBottle();
    assert.equal(90, water_bottle.drink());
    assert.equal(110, athlete.hydrationLevel);
  })

});