import React, { Component } from 'react';
import * as API from './BookAPI.js';
import SearchListElement from './SearchListElement.js';
import { Link } from 'react-router-dom';


class SearchPage extends Component {
  state =  {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))

    if (query === ''){
      this.setState({
        showingBooks: []
      })
    } else {
      API.search(query)
      .then((books) => {
        if (books === undefined) {
          this.setState({
            showingBooks: []
          });
        } else {
          this.setState({
            showingBooks: books
          });
        }
        console.log(this.state);
      })
  }

  }


  render() {
    const {query, showingBooks} = this.state;

    return (
      <div>
      <div className='navBar'>
        <div className='navMenu'>
          <span>
            My Books
          </span>
          <span className='navLeft'>
            <Link
              to='/'
              className='browserLink'
            >
              <i className="fa fa-home"></i>
            </Link>
          </span>
        </div>
      </div>
      <div className='search'>
        <input
          type='text'
          mulitple='true'
          placeholder='Search for a book.'
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
        {showingBooks.length > 0 &&
          <div className='flexContainer'>
            {showingBooks.map((book) => (
              <div key={book.id}  className='listElementContainer'>
                <SearchListElement books={this.props.books} book={book}
                onShelfChange={(ev, book) => this.props.onShelfChange(ev, book)} />
              </div>
            ))}
          </div>
        }
        {(showingBooks.length === 0 || showingBooks.error === 'empty query') &&
          <div className='message'>
            No matching results.
          </div>
        }

        <div className='footer'>

        </div>

      </div>
    )

  }
}

export default SearchPage
