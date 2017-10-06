import React from 'react';
import Shows from './Shows';

class Years extends React.Component {
  constructor() {
    super();
    this.state = { shows: null };
  }


  pickYear(year, row) {
    // we HAVE to handle requests on the back end because of CORS
    fetch(`./years?year=${year}&row=${row}`)
      .then(response => response.json()).then((json) => {
      // sort response by date
        json.response.docs.sort((a, b) => {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }
          return 0;
        });

        // trigger rendering
        this.setState({ shows: json.response.docs });
        // console.log(this.state.shows);

        // jump to show list
        window.scrollTo(0, 475);
      });
  }


  render() {
    return (
      <div>
        <div className="column column-12">
          <div className="yearButtons">
            <p>Select Year</p>
            <a href="#/">
              <button onClick={() => this.pickYear(2001, 15)}>2001</button>
              <button onClick={() => this.pickYear(2002, 26)}>2002</button>
              <button onClick={() => this.pickYear(2003, 84)}>2003</button>
              <button onClick={() => this.pickYear(2004, 96)}>2004</button>
              <button onClick={() => this.pickYear(2005, 131)}>2005</button>
              <button onClick={() => this.pickYear(2006, 84)}>2006</button>
              <button onClick={() => this.pickYear(2007, 25)}>2007</button>
              <button onClick={() => this.pickYear(2008, 4)}>2008</button>
              <button onClick={() => this.pickYear(2009, 17)}>2009</button>
              <button onClick={() => this.pickYear(2010, 20)}>2010</button>
              <button onClick={() => this.pickYear(2011, 34)}>2011</button>
              <button onClick={() => this.pickYear(2012, 14)}>2012</button>
              <button onClick={() => this.pickYear(2013, 1)}>2013</button>
            </a>
          </div>

          {this.state.shows !== null &&
            <Shows
              shows={this.state.shows}
            />
          }

        </div>
      </div>
    );
  }
}
export default Years;
