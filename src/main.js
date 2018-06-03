import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { GalacticAgeCalculator } from './galactic-age-calculator.js';

$(document).ready(function() {
  $('#').submit(function(event) {
    event.preventDefault();
    //var row = $('#').val();

    var output = new GalacticAgeCalculator();
    output.checkHaiku();

    $('ul#').append("<h1>" + "<p>" + output + "</p>" + "</h1>");

  });
});
