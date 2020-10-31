'use strict';

module.exports = function(app) {
    var budget = require('../controller/budgetController');
    app.route('/budget')
        .get(budget.budgetdata)
        .post(budget.add);
};