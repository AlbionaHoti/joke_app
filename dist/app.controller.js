"use strict";

var _insults = _interopRequireDefault(require("insults"));

var _motivation2 = _interopRequireDefault(require("motivation"));

var _inspirationalQuotes = _interopRequireDefault(require("inspirational-quotes"));

var _oneLinerJoke = _interopRequireDefault(require("one-liner-joke"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  insults: function insults(_req, res) {
    var insult = (0, _insults["default"])();
    res.json(insult);
  },
  motivation: function motivation(_req, res) {
    var motiv = _motivation2["default"].get();

    res.json(motiv.text);
  },
  inspired: function inspired(_req, res) {
    var inspired = _inspirationalQuotes["default"].getRandomQuote();

    res.json(inspired);
  },
  oneLine: function oneLine(_req, res) {
    var one_line_joke = _oneLinerJoke["default"].getRandomJoke();

    res.json(one_line_joke);
  }
};