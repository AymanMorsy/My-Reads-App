import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
state = {
    books:[]
}
componentDidMount(){
BooksAPI.getAll().then((books)=>{
    this.setState({books})
    });

}

updateShelf = (book, bookShelf) => {
    BooksAPI.update(book, bookShelf)
        .then(()=>{

        // how to rerender component after updating books shelf state          

            })
}



render() { 
    const {category,title} = this.props
    const {books}=this.state
    
    let bookCategory ;
    if(books.length){
        bookCategory = books.filter((book)=>  book.shelf === category)
       
    }
 

    return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {

                    bookCategory && bookCategory.map(book => (
                            
                            <li key = {book.id}>
                                <Book 
                                    style ={{ 
                                        width: 128, 
                                        height: 192, 
                                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail :'https://image.ibb.co/jXn9Ae/Cover_Coming_Soon.png'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                        }}
                                    author = {book.authors ? book.authors.toString() : 'Unknown!'}
                                    bookTitle = {book.title}
                                    category = {category}
                                    update = {(e) => {this.updateShelf(book, e.target.value)}}
                                />
                            </li>
                        ))
                    
                }


            </ol>
            </div>
        </div>
      );
    }
}
 
export default Shelf;




