import React,{Component} from 'react';

class Book extends Component {

    render() { 
        const {style,author,bookTitle,category,update} = this.props;    
        return ( 
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={style}></div>
                <div className="book-shelf-changer">
                    <select 
                    value ={category ? category :'none'}
                    onChange ={update}
                    >
                    <option value="move" disabled>Move to.</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{author}</div>
            </div>
            );
    }
}
 
export default Book;




