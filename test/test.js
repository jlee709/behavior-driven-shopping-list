console.log('test file linked');

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;

describe('shoppingListItem', function() {
  it('should be a class', function() {
    shoppingListItem.expect.to.be.a.function();
  });

  it('should have a property of name', function(){
    expect(shoppingListItem).to.have.property("name");
  });

  it('should have a property of name', function(){
    expect(shoppingListItem).to.have.property("description");
  });

  it('should have a property of name', function(){
    expect(shoppingListItem).to.have.property("is_done");
  });

});
// end of describe