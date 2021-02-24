import Item from './item.js'

class Conjured extends Item {
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
    }


  qualityModifier() {

      return 2;

  }
}
  
  
  export default Conjured