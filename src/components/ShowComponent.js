import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import shows from '../reducers/yearReducer';
// import { connect } from 'react-redux';
// import { grabSongs } from '../redux/showReducer';

const ShowComponent = ({ showClicked }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(shows, initialState);
  return (
    <div>
      {shows.showList ?
        <div>
          {
            shows.showList[0].map(data => (
              <a key={data.identifier} className="allShows" role="presentation" onClick={() => showClicked(data.identifier, data.title)}>
                {data.title}
              </a>
            ))
          }
        </div>
        :
        <div />
      }
    </div>
  )
};

ShowComponent.propTypes = {
  showClicked: PropTypes.func,
  shows: PropTypes.object,
};

ShowComponent.defaultProps = {
  showClicked: null,
  shows: null,
};

// const mapStateToProps = shows => shows;

// const mapDispatchToProps = dispatch => ({
//   showClicked: (year, row) => {
//     dispatch(grabSongs(dispatch, year, row));
//   },
// });

// const ShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShowComponent);
export default ShowComponent