import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { yearRequest } from '../redux/yearReducer';

const YearComponent = ({ yearClicked }) => (
  <div>
    <div>
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

    </div>
  </div>
);

YearComponent.propTypes = {
  yearClicked: PropTypes.func,
};

YearComponent.defaultProps = {
  yearClicked: null,
};

const mapStateToProps = shows => shows;

const mapDispatchToProps = dispatch => ({
  yearClicked: (year, row) => {
    dispatch(yearRequest(dispatch, year, row));
  },
});

const YearContainer = connect(mapStateToProps, mapDispatchToProps)(YearComponent);
export default YearContainer;
