import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { grabSongs } from '../redux/showReducer';

const ShowComponent = ({ shows, showClicked }) => (
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
);

ShowComponent.propTypes = {
  showClicked: PropTypes.func,
  shows: PropTypes.object,
};

ShowComponent.defaultProps = {
  showClicked: null,
  shows: null,
};

const mapStateToProps = shows => shows;

const mapDispatchToProps = dispatch => ({
  showClicked: (year, row) => {
    dispatch(grabSongs(dispatch, year, row));
  },
});

const ShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShowComponent);
export default ShowContainer;
