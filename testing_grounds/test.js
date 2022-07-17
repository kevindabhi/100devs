function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, it has ${pages} pages and I have ${read} it`
    }
}

const theHobbit = new Book("The Hobbit", "JRR", "99", "absolutely")

console.log(theHobbit.info())


