import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../components/GlobalStyles/GlobalStyles';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import BusinessList from '../../components/BusinessList/BusinessList';
import YelpApi from '../../utils/yelpApi';

const StyledApp = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;

class App extends React.Component {
  state = {
    renderItems: [],
  };

  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    YelpApi.search(term, location, sortBy).then((apiItems) => {
      this.setState({
        renderItems: apiItems,
      });
    });
  }

  render() {
    const { renderItems } = this.state;
    return (
      <StyledApp>
        <GlobalStyles />
        <NavBar />
        <SearchBar search={this.searchYelp} />
        <BusinessList businesses={renderItems} />
      </StyledApp>
    );
  }
}

export default App;
