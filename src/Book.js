import React,{Component} from 'react';
class Book extends Component {


render() {
const {title,style,updateShelf,book,shelf}=this.props

        return ( 
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={style}/>
            <div className="book-shelf-changer">
                <select 
                   value= {book.shelf || shelf}
                    onChange = {(e)=> updateShelf(book,e.target.value)}
                >
                <option value="move" disabled>Move to.</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{book.authors? book.authors.toString():'Unknown!'}</div>
        </div>
            );
    }
}
 
export default Book;




