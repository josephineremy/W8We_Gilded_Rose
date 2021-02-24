import Item from './item.js'

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
  }

  ifQualityMinMaxExceed() {
  if (this.quality >= 50 || this.quality <= 0) {
    if (this.quality > 50) this.quality = 50;
    if (this.quality < 0) this.quality = 0;
  }
}
  qualityModifier() {
    return -1
  }

}

export default StandardItem