import React from 'react'
import {Route,Switch} from 'react-router-dom';
import ListBook from './ListBook'
import SearchBook from './SearchBook'
import Error404 from './404'
import './App.css'


class BooksApp extends React.Component {
  render() {
      return (
        <div className="app">
        <Switch>
          <Route exact path='/' component ={ListBook}/>
          <Route exact path='/search' component ={SearchBook}/>
          <Route  component ={Error404}/>
        </Switch>
        </div>
      )
    }
}

export default BooksApp
