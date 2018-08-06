import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'


class ListBook extends Component {
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
        this.componentDidMount()      
            })
}

render() { 
    const {books}=this.state
    return(
    <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              <Shelf 
              category ='currentlyReading' 
              title ='Currently Reading'
              books ={books} 
              updateShelf = {this.updateShelf}       
              />
              <Shelf 
              category ='wantToRead' 
              title ='Want to Read'              
              books ={books}        
              updateShelf = {this.updateShelf}       
              />
              <Shelf 
              category ='read' 
              title ='Read'             
              books ={books}        
              updateShelf = {this.updateShelf}       
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



