import React from 'react';
import { PropTypes } from 'prop-types';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
  state = {
    term: '',
    location: '',
    sortBy: 'best_match',
  };

  constructor(props) {
    super(props);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    const { sortBy } = this.state;
    return sortBy === sortByOption ? 'active' : '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    const term = event.target.value;
    this.setState({ term });
  }

  handleLocationChange(event) {
    const location = event.target.value;
    this.setState({ location });
  }

  handleSearch(event) {
    const {
      term, location, sortBy,
    } = this.state;
    const { search } = this.props;
    search(term, location, sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map((item) => (
      <li key={sortByOptions[item]} className={this.getSortByClass(sortByOptions[item])}>
        <a
          href={`#${sortByOptions[item]}`}
          onClick={this.handleSortByChange.bind(this, sortByOptions[item])}
          onKeyPress={this.handleSortByChange.bind(this, sortByOptions[item])}
        >
          {item}
        </a>
      </li>
    ));
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href="#go" onClick={this.handleSearch}>Let&apos;s Go</a>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
