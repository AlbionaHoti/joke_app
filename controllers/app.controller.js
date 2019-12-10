"use strict";
import getInsult from "insults";
 
import motivation from 'motivation';
import quote from 'inspirational-quotes';
import oneLinerJoke from 'one-liner-joke';

module.exports = {
  insults(_req, res) {
    const insult = getInsult();
    res.json(insult);
  },
 
  motivation(_req, res) {
    const motiv = motivation.get();
    res.json(motiv.text);
  },
 
  inspired(_req, res) {
    const inspired = quote.getRandomQuote();
    res.json(inspired);
  },

  oneLine(_req, res) {
    const one_line_joke = oneLinerJoke.getRandomJoke();
    res.json(one_line_joke);
  }
};