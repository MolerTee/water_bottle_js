var athlete = {
  hydrationLevel: 100,
  distanceTraveled: 0,

  run: function(){
    if (this.hydrationLevel < 10){
      return "im pooped";
    }

    this.hydrationLevel -= 10;
    this.distanceTraveled += 10;
  },

  drink: function(){
    this.hydrationLevel += 10;
  }
};

module.exports = athlete;