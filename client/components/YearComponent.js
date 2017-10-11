import React from 'react';
import PropTypes from 'prop-types';

const YearComponent = ({ yearClicked, getShows }) => (
  <div>
    <div className="column column-12">
      <div className="yearButtons">
        <p>Select Year</p>
        <a href="#/">
          <button onClick={() => yearClicked(2001, 15)}>2001</button>
          <button onClick={() => yearClicked(2002, 26)}>2002</button>
          <button onClick={() => yearClicked(2003, 84)}>2003</button>
          <button onClick={() => yearClicked(2004, 96)}>2004</button>
          <button onClick={() => yearClicked(2005, 131)}>2005</button>
          <button onClick={() => yearClicked(2006, 84)}>2006</button>
          <button onClick={() => yearClicked(2007, 25)}>2007</button>
          <button onClick={() => yearClicked(2008, 4)}>2008</button>
          <button onClick={() => yearClicked(2009, 17)}>2009</button>
          <button onClick={() => yearClicked(2010, 20)}>2010</button>
          <button onClick={() => yearClicked(2011, 34)}>2011</button>
          <button onClick={() => yearClicked(2012, 14)}>2012</button>
          <button onClick={() => yearClicked(2013, 1)}>2013</button>
        </a>
      </div>

      {/* stuck here - first get props to load on first click then render the shows component */}
      { getShows.length > 0 &&
        console.log(getShows[0].shows[0])
      }

    </div>
  </div>
);

YearComponent.propTypes = {
  yearClicked: PropTypes.func,
  getShows: PropTypes.any,
};

YearComponent.defaultProps = {
  yearClicked: null,
  getShows: {},
};

export default YearComponent;
