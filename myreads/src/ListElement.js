import React, { Component } from 'react';
import * as API from './BookAPI.js';

class ListElement extends Component{

  handleChange = (event, book) => {
    console.log(event.target.value)
    console.log(book)
    /*
    API.update(book, event.target.value)
    .then((res) => {
      console.log(res)
      console.log(this.props)
      this.props.onShelfChange(res)
    })
    */
    this.props.onShelfChange(event, book)
  }

  render(){
    const book = this.props.book

    return(
      <div className='innerListElementContainer'>
        <div
          style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}
          className='bookImg'
        >
        </div>
        <div className='listElementInfoContainer'>
          <div className='title'>
            {book.title}
          </div>
          <div className='by'>
            by
          </div>
          <div className='author'>
           {book.authors[0]}
          </div>
          <div>
            <select
              className='select'
              value={book.shelf ? book.shelf : 'none'}
              onChange={ (event) => this.handleChange(event, book)}>
                <option value="read">Read</option>
                <option value="wantToRead">Want to Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="none">None</option>
            </select>
          </div>
        </div>
      </div>

    )
  }

}

export default ListElement
