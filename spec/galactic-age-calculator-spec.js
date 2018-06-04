import { GalacticAgeCalculator } from './../src/galactic-age-calculator.js';

describe('galactic-age-calculator', function(){
  it ('should test that user input is correct', function(){
    let userInput = new GalacticAgeCalculator('1990-03-30', 85);
    expect(userInput.userAge).toEqual('1990-03-30');
    expect(userInput.userLife).toEqual(85);
  });

  it ('should test to converts the users age in seconds', function(){
    let userInput = new GalacticAgeCalculator('1990-03-30', 85);
    let userLife = new Date(userInput.userLife);
    let thisdaysDate = new Date();
    expect(userInput.checkAgeInSeconds()).toEqual((Math.floor((thisdaysDate.getTime() - userLife.getTime()) / 1000)));
  });

  it ('should test the users age in Mercury Years', function(){
    let userAge = new GalacticAgeCalculator('1945-01-01', 45);

    expect(userAge.checkAgeOnMercury()).toEqual(116);
  });
});

  it ('should test age on Earth is correct', function(){
    let userAge = new GalacticAgeCalculator('1990-03-30', 85);

    expect(userAge.checkAgeOnEarth()).toEqual(27);
  });


  it ('should test age on Venus is correct', function(){
    let userAge = new GalacticAgeCalculator('1990-03-30', 85);

    expect(userAge.checkAgeOnVenus()).toEqual(45);
  });

  it ('should test age on Mars is correct', function(){
    let userAge = new GalacticAgeCalculator('1990-03-30', 85);

    expect(userAge.checkAgeOnMars(14)).toEqual(25763);
  });

  it ('should test age on Jupiter is correct', function(){
    let userAge = new GalacticAgeCalculator('1990-03-30', 85);

    expect(userAge.checkAgeOnJupiter()).toEqual(2);
  });

  it('should test the users life expectancy')
});
