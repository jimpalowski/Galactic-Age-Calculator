export class GalacticAgeCalculator {
  constructor(userAge, userLife){
    this.userAge = userAge;
    this.userLife = userLife;
  }

  checkAgeInSeconds() {
    let userDate = new Date(this.userAge)
    let todayDate = new Date();
    return Math.floor((todayDate.getTime() - userDate.getTime() / 1000));
    }

  checkAgeOnEarth(){
    let EarthAge = Math.floor(this.checkAgeInSeconds() / 31536000);
    return EarthAge;
  }

  checkAgeOnMercury(){
    let MercuryAge = Math.floor(this.checkAgeInSeconds() / 31536000 / .24);
    return MercuryAge;
  }

  checkAgeOnVenus(){
    let VenusAge = Math.floor(this.checkAgeInSeconds() / 31536000 / .62);
    return VenusAge;
  }

  checkAgeOnMars(){
    let MarsAge = Math.floor(this.checkAgeInSeconds() / 31536000 / 1.88);
    return MarsAge;
  }

  checkAgeOnJupiter(){
    let JupiterAge = Math.floor(this.checkAgeInSeconds() / 31536000 / 11.86);
    return JupiterAge;

    }
  }


  lifeExpectancy(){
    let userLifeExpectancy = 0;
  }

}
