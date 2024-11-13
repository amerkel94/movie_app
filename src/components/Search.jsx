import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      } // вызываем поиск коллбэком, чтобы сперва гарантировано обновился state.type
    );
  };

  render() {
    const { searchMovies } = this.props;
    const { search, type } = this.state;

    return (
      <div className='row'>
        <div className='input-field'>
          <input
            className='validate'
            placeholder='Введите название фильма'
            type='search'
            value={search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn search-btn blue darken-3'
            onClick={() => searchMovies(search, type)}
          >
            <i className='material-icons'>search</i>
          </button>
        </div>
        <div>
          <label>
            <input
              className='with-gap'
              type='radio'
              name='search-type'
              value='all'
              onChange={this.handleFilter}
              checked={type === 'all'}
            />
            <span>Все</span>
          </label>
          <label>
            <input
              type='radio'
              name='search-type'
              value='movie'
              onChange={this.handleFilter}
              checked={type === 'movie'}
            />
            <span>Фильмы</span>
          </label>
          <label>
            <input
              type='radio'
              name='search-type'
              value='series'
              onChange={this.handleFilter}
              checked={type === 'series'}
            />
            <span>Сериалы</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
