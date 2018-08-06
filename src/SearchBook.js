import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp';

class SearchBook extends Component {
state = { 
    query:'',
    search:[],
    result:''
 }

 updateShelf = (book, bookShelf) => {
    BooksAPI.update(book, bookShelf)
        .then(()=>{
            this.setState(this.state)
            })
}

 updateQuery = (query)=>{
    let matchedBooks;
    this.setState({query:query})
    if(query && query !== ' '){
        
        BooksAPI.search(query).then((search)=>{
            const match = new RegExp(escapeRegExp(this.state.query),'i')
            matchedBooks = search.filter((book)=> match.test(book.title))
            this.setState({
                search:matchedBooks,
                result:'Your Search Matching : ' + matchedBooks.length + ' Books'
            })
            this.state.search.sort(sortBy('name'))
            }).catch(()=>{
                this.setState({
                    search:[],
                    result:'Nothing Match Your Query In Our Store'})
            })
    }else{
        this.setState({
            search:[],
            result:''})
        }
    
}

render() { 
    const {search,query,result}=this.state    

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to ='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value ={query}
                onChange ={(e)=> this.updateQuery(e.target.value)}
                />
            </div>
            </div>
            <div className="search-books-results">
                <p>{result !== ''?result:''}</p>
                <ol className="books-grid">
                {
                    search.length !== 0 && search.map(book => (
                            
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
 
export default SearchBook;


