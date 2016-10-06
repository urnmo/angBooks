let app = angular.module("bookLendery", []);




app.controller("checkOut", function ($scope, CheckedOutBooks) {
    $scope.books = CheckedOutBooks.get();
    $scope.checkOutButt = function (book) {
        CheckedOutBooks.borrow(book, $scope.name);
    }
});


app.factory("CheckedOutBooks", function () {
    let borrowed = [];
    let books = [{ book: "Thirty Days in the Samarkind Desert with the Duchess of Kent", author: "Fanny Brice", borrower: "", }, { book: "A Hundred and One Ways to Start a Fight", author: "Some Irish Gentleman", borrower: "", }, { book: "Biggles Combs his Hair", author: "Sam E.J. Elliot OBE", borrower: "", }, { book: 'The Gospel According to Charley Drake', author: "Can Newton", borrower: "", }, { book: "Ethel the Aardvark goes Quantity Surveying", author: "Kristy Fletcher", borrower: "", }, { book: "The Amazing Adventures of Captain Gladys Stoutpamphlet and her Intrepid Spaniel Stig Amongst the Giant Pygmies of Beckles", author: "Jeb Cletus", borrower: "", }];
    // write the function that happens on button click

    return {

        get: function () {
            return books;
        },

        checkOut: function (titleOfBook, username) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === titleOfBook) {
                    books[i].borrower = username;
                }
            }
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


