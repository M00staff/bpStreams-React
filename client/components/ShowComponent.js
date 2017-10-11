import React from 'react';
import PropTypes from 'prop-types';

const ShowComponent = ({ shows }) => (
  <div>
    {
      shows.map(data =>
        <a className="allShows" key={data.identifier} role="presentation" onClick={() => this.pickShow(data.identifier, data.title)}>{data.title}</a>,
      )
    }
  </div>
);

ShowComponent.propTypes = {
  shows: PropTypes.arr,
};

export default ShowComponent;
