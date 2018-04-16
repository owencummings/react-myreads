import React, { Component } from 'react';
import * as API from './BookAPI.js';
import ListElement from './ListElement.js';
import { Link } from 'react-router-dom';

class MainPage extends Component {


  render() {
    const books = this.props.books

    return (
      <div className='body'>
        <div className='navBar'>
          <div className='navMenu'>
            <span>
              My Books
            </span>
            <span className='navLeft'>
              <Link
                to='/search'
                className='browserLink'
              >
                <i className="fa fa-search"></i>
              </Link>
            </span>
          </div>
        </div>
        <br/>
        <div className='sectionHead'
          style={{color: '#F4F2A7'}}>
          Currently Reading
        </div>
        <div className='flexContainer'>
          {books.filter((book) => book.shelf === 'currentlyReading')
            .map((book) => (
            <div key={book.id} className='listElementContainer'>
              <ListElement
                book={book}
                onShelfChange={(ev, book) => this.props.onShelfChange(ev, book)}
              />
            </div>
          ))}
        </div>
        <br/>
        <br/>
        <div className='sectionHead'
          style={{color: '#5D9EBF'}}>
          Read
        </div>
        <div className='flexContainer'>
          {books.filter((book) => book.shelf === 'read')
            .map((book) => (
            <div key={book.id} className='listElementContainer'>
              <ListElement
                book={book}
                onShelfChange={(ev, book) => this.props.onShelfChange(ev, book)}
              />
            </div>
          ))}
        </div>
        <br/>
        <br/>
        <div className='sectionHead'
          style={{color: '#F28D96'}}>
          Want to Read
        </div>
        <div className='flexContainer'>
          {books.filter((book) => book.shelf === 'wantToRead')
            .map((book) => (
            <div key={book.id} className='listElementContainer'>
              <ListElement
                book={book}
                onShelfChange={(ev, book) => this.props.onShelfChange(ev, book)}
              />
            </div>
          ))}
        </div>
        <div className='footer'>
        </div>
      </div>
    );
  }
}

export default MainPage
