import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import './SearchBar.css';
import { mainColor } from '../GlobalStyles/GlobalStyles';
import img from './bg.jpg';

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 30rem;
`;

const StyledButton = styled.div`
    width: 15rem;
    border-radius: 4px;
    padding: 0.7rem 1.7rem;
    background-color:${mainColor};
    color: #ffffff;
    font-weight: 600;
    transition: background-color .5s;
    text-align: center;
    cursor: pointer;
`;

const StyledSmallButton = styled(StyledButton)`
  width: 11rem;
  padding: 0.5rem;
`;

const StyledInput = styled.input`
  width: 22rem;
  padding: .66rem 1rem;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: .77rem;
  font-weight: 500;
`;

const StyledFlexRow = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
`;

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
      <StyledSmallButton
        key={sortByOptions[item]}
        onClick={this.handleSortByChange.bind(this, sortByOptions[item])}
        onKeyPress={this.handleSortByChange.bind(this, sortByOptions[item])}
      >
        {item}
      </StyledSmallButton>
    ));
  }

  render() {
    return (
      <StyledSearchBar>
        <StyledFlexRow>
          {this.renderSortByOptions()}
        </StyledFlexRow>
        <StyledFlexRow>
          <StyledInput placeholder="Search Businesses" onChange={this.handleTermChange} />
          <StyledInput placeholder="Where?" onChange={this.handleLocationChange} />
        </StyledFlexRow>
        <StyledButton
          onClick={this.handleSearch}
        >
          Search
        </StyledButton>
      </StyledSearchBar>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
