import { connect } from 'react-redux';
import { yearRequest } from '../redux/reducers/showReducer';
import YearComponent from '../presentational/YearComponent';

const mapStateToProps = ({ getShows }) => ({ getShows });

const mapDispatchToProps = (dispatch) => {
  return {
    yearClicked: (year, row) => {
      dispatch(yearRequest(dispatch, year, row));
    },
  };
};

// connect here just renders the child component
// but it will have access to the parent's props
const YearContainer = connect(mapStateToProps, mapDispatchToProps)(YearComponent);

export default YearContainer;
