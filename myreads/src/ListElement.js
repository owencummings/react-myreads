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


  findColor(shelf){

    const currentlReadingColor =  '#F4F2A7'
    const readColor = '#5D9EBF'
    const wantToReadColor = '#F28D96'
    const noneColor = '#c8c8c8'

    switch(shelf){
      case 'currentlyReading':
        return currentlReadingColor
      case 'read':
        return readColor
      case 'wantToRead':
        return wantToReadColor
      default:
        return noneColor
    }

  }

  render(){
    const book = this.props.book

    return(
      <div className='innerListElementContainer'
        style={{borderColor: this.findColor(book.shelf)}}>
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
            {book.authors ? book.authors[0] : 'Unknown'}
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
