var assert = require('assert');

module.exports = function () {
  this.Given(/^I visit Amazon$/, function() {
    return this.driver.get('http://www.amazon.de');
  });

  this.Then(/^I should see Amazon in title$/, function() {
    this.driver.getTitle().then(function (title) {
      assert.equal(title, "Amazon");
      return title;
    });
  });
};
