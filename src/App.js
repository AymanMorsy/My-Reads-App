import React from 'react'
import {Route} from 'react-router-dom';
import ListBook from './ListBook'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {

render() {
    return (
      <div className="app">
        <Route exact path='/' render ={()=>(
            <ListBook/>
          )}/>
        <Route exact path='/search' render ={()=>(
            <SearchBook/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
