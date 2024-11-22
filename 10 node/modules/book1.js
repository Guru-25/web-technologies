const favoriteAuthor = { name: "Ken Bruen", genre: "Noir", nationality: "Irish" };

function favoriteBook() {
    return { title: "The Guards", author: "Ken Bruen" };
}

function getBookRecommendations() {
    return [
        { id: 1, title: "The Guards", author: "Ken Bruen" },
        { id: 2, title: "The Stand", author: "Stephen King" },
        { id: 3, title: "The Postman Always Rings Twice", author: "James M. Cain" }
    ];
}

module.exports = {
    favoriteAuthor,
    favoriteBook,
    getBookRecommendations
};