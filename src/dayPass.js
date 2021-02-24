import Item from './item.js'

class DayPass extends Item {
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
    if ((this.sellIn <= 10) && (this.sellIn > 5)) {
      return 2;
    }
    else if ((this.sellIn <= 5) && (this.sellIn > 0)) {
      return 3;
    }
    else if (this.sellIn <= 0) {
      return - this.quality;
    }
    return 1
  }
}

export default DayPass