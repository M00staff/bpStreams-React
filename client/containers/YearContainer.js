import { connect } from 'react-redux';
import { yearPicked } from '../redux/actions';
import YearComponent from '../presentational/YearComponent';

const mapStateToProps = ({ getShows }) => {
  return {
    getShows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    yearClicked: (year, row) => {
      dispatch(yearPicked(year, row));
    },
  };
};

// connect here just renders the child component
// but it will have access to the parent's props
const YearContainer = connect(mapStateToProps, mapDispatchToProps)(YearComponent);

export default YearContainer;
