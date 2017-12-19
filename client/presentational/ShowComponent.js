import React from 'react';
import PropTypes from 'prop-types';


const ShowComponent = props => (
  <div>
    {
      props.shows.map(data =>
        <a key={data.identifier} className="allShows" role="presentation" onClick={() => this.pickShow(data.identifier, data.title)}>{data.title}</a>,
      )
    }
  </div>
);

ShowComponent.propTypes = {
  shows: PropTypes.array,
};

ShowComponent.defaultProps = {
  shows: null,
};

export default ShowComponent;
