import Book from "./Book";

function BookList({books}){

    return (
        <>
        
            {
                books.map((book) =>{
                    return <Book key = {book.id} title = {book.title} author={book.author} publicationyear={book.publicationyear}></Book>
                 })
             
            }
           
        
        </>
    )

}


export default BookList;