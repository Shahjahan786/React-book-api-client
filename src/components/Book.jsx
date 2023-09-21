import styles from './Book.module.css'
function Book(props){

    return (
        <>
            <div className={styles.Book}>
                <h2 className={styles.BookTitle}>Title: {props.title}</h2>
                <p className={styles.BookAuthor}>Author: {props.author}</p>
                <p className={styles.BookYear}>Publication Year: {props.publicationyear}</p>
            </div>
        </>
    )

}

export default Book;