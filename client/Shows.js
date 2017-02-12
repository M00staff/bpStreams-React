import React from 'react';
import ReactDOM from 'react-dom';
// import { Years } from './Years';

class Shows extends React.Component {


  componentWillMount() {
    // console.log(this.props.shows);
  }


  displayShows(shows) {
    return (
      shows.map((data, index) =>
        <div key={index}>{ data.title }</div>
      )
    )
  }


  render() {
    return (
      <div>
        { this.displayShows(this.props.shows) }
      </div>
    )
  }
}

export { Shows }
