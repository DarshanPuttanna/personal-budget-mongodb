  'use strict';

var mongoose = require('mongoose')
var Budget = mongoose.model('Budget');

exports.budgetdata = function(req, res) {
  Budget.find({}, function(err, budget) {
    if (err)
      res.send(err);
    res.json(budget);
  });
};

exports.add = function(req, res) {
  var new_budget = new Budget(req.body);
  new_budget.save(function(err, budget) {
    if (err)
      res.send(err);
    res.json(budget);
  });
};