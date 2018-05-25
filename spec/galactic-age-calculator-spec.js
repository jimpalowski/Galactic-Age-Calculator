import { GalacticAgeCalculator } from './../src/galatic-age-calculator.js';

describe ('galatic-age-checker', function() {
  it ('should test whether the users age is in Mercury Age', function() {
    var galaticAge = new GalacticAgeCalculator(12);
    console.log(haiku);
    expect(galaticAge.checkGalaticAge(12)).toEqual(12);
    console.log("new " + checkGalaticAge());
  });
});
