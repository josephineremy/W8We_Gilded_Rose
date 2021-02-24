import Item from './item.js'

class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
}

qualityModifier() {
  return 0
}
}
export default Legendary