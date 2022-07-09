function Book (title, author, pages, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`Book ${this.title} written by ${this.author} has ${this.pages} pages and I have ${this.read} read it`)
    }
}

const hobbit = new Book ("hobbit", "JRR", 150, "not")