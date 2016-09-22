let app = angular.module("bookLendery", []);




app.controller("checkOut", function ($scope){
 
 $scope.books = [ {book:"Thirty Days in the Samarkind Desert with the Duchess of Kent"}, {book:"A Hundred and One Ways to Start a Fight"},  {book:"Biggles Combs his Hair"}, {book:'The Gospel According to Charley Drake'}, {book:"Ethel the Aardvark goes Quantity Surveying"}, {book:"The Amazing Adventures of Captain Gladys Stoutpamphlet and her Intrepid Spaniel Stig Amongst the Giant Pygmies of Beckles"}];
// write the function that happens on button click
});

$scope.checkOutButt = function(){

},

app.factory("CheckedOutBooks", function(){
    let borrowed = [];

    return {
        add: function (book, borrower){
            borrowed.push({
                book: book,
                borrower: borrower,
            });
        },
        all: function(){
            return borrowed;
        },
    };
});


// app.controller("lent", function ($scope, CheckedOutBooks,){});