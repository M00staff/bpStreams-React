import React from 'react';
import ReactDOM from 'react-dom';
import { Shows } from './Shows';

class Years extends React.Component {

  constructor() {
    super();
    this.state = { shows: null }
  }


  pickYear(year, row) {
    // we HAVE to handle requests on the back end because of CORS
    fetch(`./years?year=${year}&row=${row}`)
    .then(response => response.json()).then(json => {

      // sort response by date
      json.response.docs.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
      }
        if (a.date < b.date) {
          return -1;
      }
        return 0;
      })

      // trigger rendering
      this.setState({ shows: json.response.docs })
      // console.log(this.state.shows);
    });
  }


  render() {
    return (
      <div>
        <div className="column column-12">
          <div className="yearButtons">
          <p>Select Year</p>
            <a href="#/">
                <button onClick={ this.pickYear.bind(this, 2001, 15) } >2001</button>
                <button onClick={ this.pickYear.bind(this, 2002, 26) } >2002</button>
                <button onClick={ this.pickYear.bind(this, 2003, 84) } >2003</button>
                <button onClick={ this.pickYear.bind(this, 2004, 96) } >2004</button>
                <button onClick={ this.pickYear.bind(this, 2005, 131) } >2005</button>
                <button onClick={ this.pickYear.bind(this, 2006, 84) } >2006</button>
                <button onClick={ this.pickYear.bind(this, 2007, 25) } >2007</button>
                <button onClick={ this.pickYear.bind(this, 2008, 4) } >2008</button>
                <button onClick={ this.pickYear.bind(this, 2009, 17) } >2009</button>
                <button onClick={ this.pickYear.bind(this, 2010, 20) } >2010</button>
                <button onClick={ this.pickYear.bind(this, 2011, 34) } >2011</button>
                <button onClick={ this.pickYear.bind(this, 2012, 14) } >2012</button>
                <button onClick={ this.pickYear.bind(this, 2013, 1) } >2013</button>
            </a>
          </div>

          {this.state.shows !== null
            ?
              <Shows
                shows={this.state.shows}
              />
            :
              null
          }

        </div>
      </div>
    )
  }
}
export { Years }
