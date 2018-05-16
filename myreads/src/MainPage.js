import React, { Component } from 'react';
import * as API from './BookAPI.js';
import ListElement from './ListElement.js';
import { Link } from 'react-router-dom';


class MainPage extends Component {


  render() {
    const books = this.props.books

    let animeProps = {
      opacity: [0, 1],
      scale: [.2, 1],
      delay: (el, i) => i * 200
    }

    return (
      <div className='body'>
        <div className='navBar'>
          <div className='navMenu'>
            <div className='navEl'>
              READ
            </div>
            <div className='navEl'>
              <Link
                to='/search'
                className='browserLink'
              >
                <i className="fa fa-search"></i>
              </Link>
            </div>
          </div>
        </div>
        <br/>
        <div className='sectionHead'
          style={{color: '#FF7C72'}}>
          CURRENTLY READING
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
          style={{color: '#A6FF8F'}}>
          READ
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
          style={{color: '#61C3FF'}}>
          WANT TO READ
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
