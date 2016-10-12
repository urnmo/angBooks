let app = angular.module("bookLendery", []);




app.controller("checkOut", function ($scope, CheckedOutBooks) {
    $scope.books = CheckedOutBooks.get();
    $scope.checkout = function (thisBook) {
        CheckedOutBooks.checkOut(thisBook, $scope.name);
    }
});

app.controller("lent", function ($scope, CheckedOutBooks) {
   
    
});

app.factory("CheckedOutBooks", function () {
    let borrowed = [];
    let books = [{ book: "Thirty Days in the Samarkind Desert with the Duchess of Kent", author: "Fanny Brice", borrower: "none", }, { book: "A Hundred and One Ways to Start a Fight", author: "Some Irish Gentleman", borrower: "none", }, { book: "Biggles Combs his Hair", author: "Sam E.J. Elliot OBE", borrower: "none", }, { book: 'The Gospel According to Charley Drake', author: "Can Newton", borrower: "none", }, { book: "Ethel the Aardvark goes Quantity Surveying", author: "Kristy Fletcher", borrower: "none", }, { book: "The Amazing Adventures of Captain Gladys Stoutpamphlet and her Intrepid Spaniel Stig Amongst the Giant Pygmies of Beckles", author: "Jeb Cletus", borrower: "none", }];
    // write the function that happens on button click

    return {

        get: function () {
            return books;
        },

        checkOut: function (book, borrower) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].book === book) {
                    books[i].borrower = borrower;
                }
            }
            console.log("hello");
        },

        borrowed: function (person) {
            let outList = [];
            for (let i = 0; i < books.length; i++) {
                if (user === books[i].borrower) {
                    outList.push(books[i]);
                }
            }
            console.log(outlist);
            return outList;
        }
    }
});


