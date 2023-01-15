const author = {
    fullName: "Bob Alice",
    books: ["Java Web"],
    printBooks() {
        this.books.forEach(book => console.log(book + ' by ' +this.fullName));
    }
};
author.printBooks();