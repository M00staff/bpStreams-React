import { connect } from 'react-redux';
import { yearPicked } from '../redux/actions';
import YearComponent from '../components/YearComponent';

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

// i think connect here links this component with its presentational counterpart
// it will automatically render its child's contents
const YearContainer = connect(mapStateToProps, mapDispatchToProps)(YearComponent);

export default YearContainer;
