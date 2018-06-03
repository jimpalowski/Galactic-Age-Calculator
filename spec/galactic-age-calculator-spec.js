import { GalacticAgeCalculator } from './../src/galactic-age-calculator.js';

describe ('galactic-age-checker', function() {
  it ('should test whether the users age is in Mercury Age', function() {
    var galacticAge = new GalacticAgeCalculator(100);
    console.log(galacticAge);

    expect(galacticAge.checkAgeOnMercury()).toEqual(10);
    console.log("new " + checkAgeOnMercury());
  });
});
