import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class ListBook extends Component {
    state = {onShelfBooks:[]}

    getAllBooks(){
        BooksAPI.getAll()
        .then(books => this.setState({onShelfBooks:books}))
    }

    componentDidMount(){
        this.getAllBooks()       
    }
    
    updateShelf = (book,shelf)=>{
        BooksAPI.update(book,shelf)
        .then(() => this.getAllBooks() )   
    }




    render() {
        const {onShelfBooks} = this.state

        return(
                <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                    <div>
                        <Shelf 
                        bookCategory ='currentlyReading' 
                        shelfTilte ='Currently Reading' 
                        onShelfBooks ={onShelfBooks}  
                        updateShelf ={this.updateShelf}
                        />
                        <Shelf 
                        bookCategory ='wantToRead' 
                        shelfTilte ='Want to Read'                   
                        onShelfBooks ={onShelfBooks}  
                        updateShelf ={this.updateShelf}
                        />
                        <Shelf 
                        bookCategory ='read' 
                        shelfTilte ='Read'                  
                        onShelfBooks ={onShelfBooks}  
                        updateShelf ={this.updateShelf}
                        />
                    </div>
                    </div>
                    <div className="open-search">
                        <Link to ='/search'>Add a book</Link>
                    </div>
                </div>
            
            );
        }
}
 
export default ListBook;



