import React from 'react';
import styled from 'styled-components';
import ApiError from '../../utils/ApiError';
import BusinessList from '../../components/BusinessList/BusinessList';
import GlobalStyles from '../../components/GlobalStyles/GlobalStyles';
import Messages from '../../config/Messages';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WithLoading from '../../components/WithLoading/WithLoading';
import YelpApi from '../../utils/yelpApi';

const StyledApp = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;

class App extends React.Component {
  state = {
    loading: false,
    error: '',
    renderItems: [],
  };

  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({
      loading: true,
      error: '',
    });
    try {
      YelpApi.search(term, location, sortBy).then((apiItems) => {
        this.setState({
          loading: false,
          error: apiItems === null ? Messages.NO_DATA : '',
          renderItems: apiItems,
        });
      });
    } catch (err) {
      if (err instanceof ApiError) {
        this.setState({
          loading: false,
          error: err.message,
        });
      }
    }
  }

  render() {
    const { renderItems, loading, error } = this.state;
    const ListWithLoading = WithLoading(BusinessList);
    return (
      <StyledApp>
        <GlobalStyles />
        <NavBar />
        <SearchBar search={this.searchYelp} />
        <ListWithLoading businesses={renderItems} isLoading={loading} errorMsg={error} />
      </StyledApp>
    );
  }
}

export default App;
