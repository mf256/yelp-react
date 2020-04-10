import React from 'react';
import styled from 'styled-components';
import ApiError from '../../utils/ApiError';
import BusinessList from '../../components/BusinessList/BusinessList';
import GlobalStyles from '../../components/GlobalStyles/GlobalStyles';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import WithLoading from '../../components/Loading/WithLoading';
import YelpApi from '../../utils/yelpApi';

const StyledApp = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;

class App extends React.Component {
  state = {
    loading: false,
    items: [],
    meta: {},
  };

  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
    this.nextYelp = this.nextYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({
      loading: true,
    });

    try {
      YelpApi.search(term, location, sortBy).then((result) => {
        this.setState({
          loading: false,
          items: result.items,
          meta: result.meta,
        });
      });
    } catch (err) {
      if (err instanceof ApiError) {
        this.setState((state) => {
          const meta = Object.assign(state.meta, { error: err.message });
          return {
            loading: false,
            meta,
          };
        });
      }
    }
  }

  nextYelp() {
    const {
      items,
      meta: { term, location, sortBy },
    } = this.state;

    YelpApi.search(term, location, sortBy, items.length).then((result) => {
      this.setState((state) => {
        const newItems = state.items.concat(result.items);
        return {
          loading: false,
          items: newItems,
          meta: result.meta,
        };
      });
    });
  }

  render() {
    const {
      loading,
      items,
      meta: { error, total },
    } = this.state;
    const hasMore = items.length < total;
    const ListWithLoading = WithLoading(BusinessList);

    return (
      <StyledApp>
        <GlobalStyles />
        <NavBar />
        <SearchBar search={this.searchYelp} />
        <ListWithLoading
          businesses={items}
          isLoading={loading}
          errorMsg={error}
          loadMore={this.nextYelp}
          hasMore={hasMore}
        />
      </StyledApp>
    );
  }
}

export default App;
