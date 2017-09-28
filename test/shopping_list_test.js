// jshint esversion:6

console.log('test file linked');

const expect = chai.expect;
let shopping_list;
let shopping_list_item;


// shopping list Item


//=================================================
// ShoppingListItem is a class
// ShoppingListItem has a property named name
// ShoppingListItem has a property named description
// ShoppingListItem has a property named is_done
// ShoppingListItem has a constructor method that accepts 2 arguments, name and description
// the constructor method sets the new instances name and description properties using the arguments passed in
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
    shopping_list_item  = new ShoppingListItem(); //function
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
    expect(shopping_list_item, 'name').to.have.param('name').a('string').not.empty;
    expect(shopping_list_item, 'description').to.have.param('description').a('string').not.empty;  
  });

});



// - ShoppingList is a class
// - ShoppingList has a property named `items`
// - ShoppingList has a constructor method that initializes `items` as an empty Array
// - ShoppingList has a method named `addItem` that accepts a single ShoppingListItem argument
//   - invoking the `addItem` method by passing in a ShoppingListItem object should add that object to the `items` array


//   - invoking the `addItem` method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
// - ShoppingList has a method named `removeItem` that accepts a single ShoppingListItem argument
//   - invoking the `removeItem` method by passing in a ShoppingListItem object (that exists in the `items` array) should remove that object from the `items` array
//   - invoking the `removeItem` method with no parameters should remove the last item in the `items` list, if there are any items, else it does nothing
//   - invoking the `removeItem` method by passing in anything else that is not a ShoppingListItem object (that exists in the `items` array) should immediately throw an error
// - ShoppingList has a method named `render`
//   - calling the instance's `render` method will concatenate the result of calling `render()` on each item in this object's `items` array, wrapping it in a `<ul>` tags, and returning an html formatted string. ex: `<ul>...[all the li elements from ShoppingListItem.render()]...</ul>`



// shopping list
beforeEach(function(){
  shopping_list = new ShoppingList;
});

describe('shoppingList', function() {
  it('should be a class', function() {
    expect(shopping_list).to.be.a("function");
  });

  it('should have a property of name', function(){
    expect(shopping_list).to.have.property("items");
  });

  it('should initialize items as empty array', function(){
    expect(shopping_list, "items").to.be.a('array');
  });

  it('should have a property of addItem', function(){
    expect(shopping_list).to.have.property("addItem");
  });

  it('should append an item to the array', function(){
    expect(shopping_list, 'addItem').to.have.property([]);
    addItem();
    expect(shoppingList).to.be.an('array').that.contains.something.like(['addItem']);
  });

//   - invoking the `addItem` method by passing in anything else that is not a 
// ShoppingListItem object should immediately throw an error
  it('should not take in anything other than an array obj', function(){
    expect(shopping_list.addItem).to.throw("new error");
  });

});









