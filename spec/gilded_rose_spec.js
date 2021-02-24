var { Shop, Item } = require('../src/gilded_rose.js');

import Conjured from '../src/conjured.js';
import LegendaryItem from '../src/legendary.js';
import StandardItem from '../src/standardItem.js';


describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new Item("Aged Brie", 20, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("diminue la qualité deux fois plus vite quand la date de péremption est dépassée.", function() {
    listItems.push(new StandardItem("+5 Dexterity Vest", 10, 20));
    listItems.push(new StandardItem("Mana Cake", -1, 20));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
        { sellIn: 9, quality: 19 },
        { sellIn: -2, quality: 18 },
    ];
    expected.forEach(function(testCase, idx) {
        expect(items[idx].quality).toBe(testCase.quality);
        expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
});

it("La qualité du légendaire Sulfuras ne doit pas changer", function() {
  listItems.push(new LegendaryItem('Sulfuras, Hand of Ragnaros', null, 80))

  const gildedRose = new Shop(listItems);
  const items = gildedRose.updateQuality();

  var expected = [
      { sellIn: null, quality: 80 },
  ];
  expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBeLessThanOrEqual(testCase.quality);
  });
});

it("9/ La qualité d'un objet 'Conjured' diminue 2 fois plus vite qu'un objet normal", function () {
  listItems.push(new Conjured("Conjured Magic Stick", -1, 10));
  listItems.push(new Conjured("Conjured Dark Blade", 0, 12));

  const gildedRose = new Shop(listItems);
  const items = gildedRose.updateQuality();

  let expected = [
    { sellIn: -2, quality: 8 },
    { sellIn: -1, quality: 10 },
  ];
  expected.forEach(function (testCase, idx) {
    expect(items[idx].quality).toBe(testCase.quality);
    expect(items[idx].sellIn).toBe(testCase.sellIn);
  });
});


});