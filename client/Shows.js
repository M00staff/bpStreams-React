import React from 'react';
// import ReactDOM from 'react-dom';
// import { Years } from './Years';

class Shows extends React.Component {


  componentWillMount() {
    // console.log(this.props.shows);
  }


  pickShow(show) {
    console.log(show);
    fetch(`./shows?show=${show}`)
    .then(response => response.json()).then(json => {
      this.setState({ setList: json })
      console.log(this.state.setList);
    })
  }


  displayShows(shows) {
    return (
      shows.map((data, index) =>
        <a className="allShows" key={index} onClick={ this.pickShow.bind(this, data.identifier) }>{ data.title }</a>
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
