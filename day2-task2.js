class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}
class Member extends Person{
    constructor(name, id, membershiptype){
        super(name, id);
        this.membershiptype = membershiptype;
    }
}
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable =  true;
    }
}
class Library{
    #fines;    //private field for fines

    constructor(){
        this.books = [];
        this.members = [];
        this.loans = [];
        this.#fines = new Map();
    }

    bookAdd(book){
        this.books.push(book);
    }
    registerMembers(member){
        this.members.push(member);
    }
    
    bookIssue(id, title, memberId, date){
        const member = this.members.find(function(j){
            return j.id = memberId;
        });
    
    
        const book = this.books.find(function(i){
            return i.isbn===id;
        });
        
        if(!book){
            console.log("Book is not available");
            return;
        }
        if(!book.isAvailable){
            console.log("Book is available and Issued");
            return;
        }
        if(!member){
            console.log("OOPS!!! you are not a member, buy our cheapest plan to get this book and enjoy");
            return;
        }
        book.isAvailable = false;
        const loan = new Loan(book, member, date);
        this.loans.push(loan);
        console.log(`Book ${title} issued to ${member.name}, Id no. - ${member.id}, Due date is ${date}`);
    }
    returnBook(bookIsbn, memberId) {
        const loan = this.loans.find(
            l => l.book.isbn === bookIsbn && l.member.id === memberId && !l.isReturned
        );

        if (!loan) {
            console.log("No active loan found for this book and member.");
            return;
        }

        loan.isReturned = true;
        loan.book.isAvailable = true;

        console.log(`Book "${loan.book.title}" returned by ${loan.member.name} (ID: ${loan.member.id}).`);
    }
    
    listBooks() {
        console.log("Library Books:");
        this.books.forEach(book =>
            console.log(
                `${book.title} by ${book.author} (ISBN: ${book.isbn}) - ${
                    book.isAvailable ? "Available" : "Issued"
                }`
            )
        );
    }
}

class Loan{
    constructor(book, member, dueDate){
        this.book = book;
        this.member  = member;
        this.dueDate = dueDate;
        this.isReturned = false;
    }
}


const library = new Library();

library.addBook(new Book("Math", "RD sharma", "1"));
library.addBook(new Book("Science", "Newton", "2"));
library.addBook(new Book("English", "WIllaim", "3"));
library.registerMembers(new Member("Anuj", "001", "Premium"));
library.registerMembers(new Member("Ravi", "002", "Basic"));
library.issueBook("1", "001", "2024-12-23");
library.listBooks();
library.returnBook("1", "001");
library.listBooks();
