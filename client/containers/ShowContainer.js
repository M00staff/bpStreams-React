import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowComponent from '../presentational/ShowComponent';

const ShowContainer = (props) => {
  return (
    <div>
      {props.shows.showList && <ShowComponent shows={props.shows.showList[0]} />}
    </div>
  );
};

ShowContainer.propTypes = {
  shows: PropTypes.any,
};
ShowContainer.defaultProps = {
  shows: null,
};

const mapStateToProps = ({ shows }) => {
  return { shows };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showClicked: (year, row) => {
//       dispatch(showPicked(year, row));
//     },
//   };
// };


export default connect(mapStateToProps)(ShowContainer);
