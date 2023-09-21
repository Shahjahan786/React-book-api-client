import { useState, useEffect, useRef, useStyles  } from "react";
import BookList from "./components/BookList";
import "./App.css"

function App() {

  const [bookList, setBookList] = useState([]);

  let [count, setCount] = useState(1);


  const titleRef = useRef("");
  const authorRef = useRef("");
  const yearRef = useRef(2023);

  useEffect(()=>{
    fetch("http://localhost:8080/books")
    .then(response => response.json())
    .then(books => {
      console.log(books);
      setBookList(books);
    }
      )
}, [count]);


  return (
    <>

      <div className="AppForm">    
      
        <table align="center">
          <tbody>
            <tr>

              <td> <label>Title</label></td>
              <td><input ref={titleRef} type="text" placeholder="Enter Book Title"/></td>

            </tr>
            <tr>

              <td> <label>Author</label></td>
              <td><input ref={authorRef}  type="text" placeholder="Enter Book Author"/></td>

              </tr>
              <tr>

              <td> <label>Publication Year</label></td>
              <td><input ref={yearRef} type="number" placeholder="Publication Year" min="1800" max="2023"/></td>

              </tr>

              <tr>

                <td></td>
                <td>


                <button onClick={()=>{
                  let title = titleRef.current.value;
                  let author = authorRef.current.value;
                  let year = yearRef.current.value;
                  addNew(title, author, year);
                  titleRef.current.value = ""
                  yearRef.current.value = ""
                  authorRef.current.value= ""

                  setCount(++count);
                  }
                  }>Add New</button>

                </td>

              </tr>

          </tbody>
        </table>
       

      
      </div>
  
      <BookList books={bookList}/>
    
    </>
  );
}

function addNew(bookTitle, bookAuthor, year){
  
    let payload = JSON.stringify({
      "title": bookTitle,
      "author": bookAuthor,
      "publicationyear": parseInt(year)
  });

  console.log(bookTitle, bookAuthor, year);
  fetch("http://localhost:8080/books", {
    method: "POST",
    body: payload,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })
 
// Converting to JSON
.then(response => console.log(response));
 

}




export default App;
