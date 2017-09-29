// jshint esversion:6

console.log('test file linked');

const expect = chai.expect;
let shopping_list;
let shopping_list_item;

// shopping list Item

//=================================================
// ShoppingListItem is a class - check
// ShoppingListItem has a property named name - check
// ShoppingListItem has a property named description - check
// ShoppingListItem has a property named is_done - check
// ShoppingListItem has a constructor method that accepts 2 arguments, name and description
// the constructor method sets the new instances name and description properties using the arguments passed in- check
// ShoppingListItem has a method named check
// calling the instance's check method will set it's is_done property to true
// ShoppingListItem has a method named uncheck
// calling the instance's uncheck method will set it's is_done property to false
// ShoppingListItem has a method named render
//==================================================

//NOTES=====================================$$$$$$
      // invokes function as an object. class 
      // definitions always functions and returns objects
      // class declaration is a function 
      // class insstance is an object 
//NOTES=====================================$$$$$$  

describe('shoppingListItem', function(){
  beforeEach(function(){
  //object 
    shopping_list_item  = new ShoppingListItem("tv", "high res"); //function
  });

  it('should be a class', function(){
    expect(ShoppingListItem).to.be.a("function");
  });

  it('should have a property of name',function(){
    expect(shopping_list_item).to.have.property('name');
  });

  it('should have a property called description', function(){
    expect(shopping_list_item).to.have.property('description');
  });

   it('should have a property called is_done', function(){
    expect(shopping_list_item).to.have.property('is_done');
  });   

   it('should take 2 arguments: name and description', function(){
    expect(shopping_list_item.name).to.equal("tv");
    expect(shopping_list_item.description).to.equal("high res");  
  });

   it('should have a method called check', function(){
    expect(shopping_list_item.check).to.be.a('function');
   });

   it('should set method check to true', function(){
    shopping_list_item.check();
    expect(shopping_list_item.is_done).to.deep.equal(true);
   });


   it('should have a method called uncheck', function(){
    expect(shopping_list_item.uncheck).to.be.a('function');
   });

   it("uncheck should change the boolean value from true to false", function() {
       shopping_list_item.uncheck();
       expect(shopping_list_item.is_done).to.deep.equal(false);
   });

   it('should be a function' , function() {
         expect(shopping_list_item.render).to.be.a("function");

   });

   it('should render shopping list', function(){
    let string = shopping_list_item.render();
    expect(string).to.include('<span>');
  });
}); //end of describe




describe('ShoppingList', function(){
  beforeEach(function(){
  //object
    shopping_list = new ShoppingList();//function
  });

  it('should be a class', function() {
    expect(ShoppingList).to.be.a("function");
  });

  it('should have property items', function(){
  expect(shoppingList.items).to.exist;
});


describe('should have method named addItem', function(){


  it('should have a property of addItem', function(){
    expect(shopping_list).to.have.property("addItem");
  });

   it('should initialize items as empty array', function(){
    addItem();
    expect(shopping_list.items).to.deep.equal([]);
  });


  it('should append an item to the array', function(){
    shopping_list.addItem(shopping_list_item);
    expect(shoppingList.items).to.include(shoppingList);

  });
});
    

  it('should not take in anything other than an array obj', function(){
    expect(shopping_list.addItem).to.throw("new error");
  });


});







