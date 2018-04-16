import React, { Component } from 'react';
import logo from './logo.svg';
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';
import './App.css';
import { Route, HashRouter } from 'react-router-dom'
import * as API from './BookAPI.js';



class App extends Component {
  state = {
    books: []
  }

  changeShelf(ev, book){
    console.log('We made it!')
    console.log(ev.target.value)
    console.log(book)
    const dest = ev.target.value
    if (book.shelf !== dest){
      API.update(book, dest)
      .then((res) => {
        console.log(res)
        //console.log(this.props)
        //this.props.onShelfChange(res)
        book.shelf = dest
        this.setState((prevState) => ({
          books: prevState.books.filter((book2) => book2.id !== book.id).concat(book)
        }))
        console.log(this.state)
      })
    }
  }

  componentDidMount(){
    API.getAll()
    .then((books) => {
      this.setState({
        books: books,
      });
      console.log(books);
      console.log(this.state);
    })

  }


  render() {
    return (
      <div className='app'>
      <HashRouter>
        <div>
        <Route exact path='/' render={() => (
          <MainPage books={this.state.books} onShelfChange={(ev, book) => this.changeShelf(ev, book)} />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage books={this.state.books} onShelfChange={(ev, book) => this.changeShelf(ev, book)} />
        )}/>
        </div>
      </HashRouter>
      </div>

    );
  }
}

export default App;
