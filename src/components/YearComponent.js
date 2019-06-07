import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import shows, { yearRequest } from '../reducers/yearReducer';
// import { yearRequest } from '../redux/yearReducer';

const YearComponent = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(shows, initialState);
  // const { yearRequest, yearSuccess, yearFail } = actions(showDispatch);
  return (
    <div>
      <div>
        <div className="yearButtons">
          <p>Select Year</p>
          <a href="#/">
            <button onClick={() => yearRequest(dispatch, 2001, 15)}>2001</button>
            <button onClick={() => yearRequest(dispatch, 2002, 26)}>2002</button>
            <button onClick={() => yearRequest(dispatch, 2003, 84)}>2003</button>
            <button onClick={() => yearRequest(dispatch, 2004, 96)}>2004</button>
            <button onClick={() => yearRequest(dispatch, 2005, 131)}>2005</button>
            <button onClick={() => yearRequest(dispatch, 2006, 84)}>2006</button>
            <button onClick={() => yearRequest(dispatch, 2007, 25)}>2007</button>
            <button onClick={() => yearRequest(dispatch, 2008, 4)}>2008</button>
            <button onClick={() => yearRequest(dispatch, 2009, 17)}>2009</button>
            <button onClick={() => yearRequest(dispatch, 2010, 20)}>2010</button>
            <button onClick={() => yearRequest(dispatch, 2011, 34)}>2011</button>
            <button onClick={() => yearRequest(dispatch, 2012, 14)}>2012</button>
            <button onClick={() => yearRequest(dispatch, 2013, 1)}>2013</button>
          </a>
        </div>

      </div>
    </div>
  )
};

YearComponent.propTypes = {
  yearClicked: PropTypes.func,
};

YearComponent.defaultProps = {
  yearClicked: null,
};

// const mapStateToProps = shows => shows;

// const mapDispatchToProps = dispatch => ({
//   yearClicked: (year, row) => {
//     dispatch(yearRequest(dispatch, year, row));
//   },
// });

// const YearContainer = connect(mapStateToProps, mapDispatchToProps)(YearComponent);
export default YearComponent;