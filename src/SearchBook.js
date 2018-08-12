import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import Cover from './foo.png';
import {DebounceInput} from 'react-debounce-input';

class SearchBook extends Component {
state = {
    query:"",
    rawBooks : [],
    onShelfBooks:[]
    }

componentWillMount(){
    BooksAPI.getAll()
    .then(books => this.setState({onShelfBooks:books}))
}

searchQuery(query){
    this.setState({query:query})
    if(query){
        BooksAPI.search(query)
        .then(rawBooks => {
            this.setState({rawBooks:rawBooks.error?[]:rawBooks})
        })
    }else{
        this.setState({rawBooks:[]})
    }    
}

updateShelf = (book,shelf)=>{
    BooksAPI.update(book,shelf)   
}


render() {
    const {query,rawBooks,onShelfBooks} = this.state
  
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to ='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput 
                    minLength={3}
                    debounceTimeout={300}
                    type="text" 
                    placeholder="Search by book title"
                    value ={query}
                    onChange ={(e)=> this.searchQuery(e.target.value)}                    
                    />
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        rawBooks.map(rawBooks =>{
                            let shelf ='none'
                            onShelfBooks.map(shBook => shBook.id === rawBooks.id ? shelf = shBook.shelf :'' )
                            return (
                                <li key={rawBooks.id}>
                                <Book 
                                    title ={rawBooks.title}
                                    authors ={rawBooks.authors}
                                    style = {{ 
                                        width: 128, 
                                        height: 193, 
                                        backgroundImage: `url(${rawBooks.imageLinks?
                                            rawBooks.imageLinks.smallThumbnail:Cover})`, 
                                        backgroundSize:'cover'
                                    }}
                                    onShelfBooks ={onShelfBooks} 
                                    book = {rawBooks}
                                    updateShelf ={this.updateShelf} 
                                    shelf={shelf}                                   
                                />
                            </li>
                            )
                        })
                    }
                    </ol>
                </div>
            </div>
        );
}
}
 
export default SearchBook;


