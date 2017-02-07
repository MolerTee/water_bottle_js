var water_bottle = {
  waterLevel: 0,
  
  fillBottle: function(){
    this.waterLevel = 100;
    return this.waterLevel;
  },

  drink: function() {
    if (this.waterLevel < 10){
      return "you cant have negative water go to the tap you filthy animal";
    } else{
    this.waterLevel -= 10;
    return this.waterLevel;
    };
  },

  empty: function(){
    this.waterLevel = 0;
    return this.waterLevel;
  },



};

module.exports = water_bottle;