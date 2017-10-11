import { connect } from 'react-redux';
import { showPicked } from '../redux/actions';
import ShowComponent from '../components/YearComponent';

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showClicked: (year, row) => {
      dispatch(showPicked(year, row));
    },
  };
};

// i think connect here links this component with its presentational counterpart
// it will automatically render its child's contents
const ShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShowComponent);

export default ShowContainer;
