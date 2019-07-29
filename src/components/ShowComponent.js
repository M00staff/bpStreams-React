import React from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '../Provider';

const ShowComponent = ({ showClicked }) => {
  const [state] = useStateValue();
  return (
    <div>
      {
        state.showList
      ?
        state.showList.map(x => {
          return (
            <a key={x.identifier} className="allShows" role="presentation" onClick={() => showClicked(x.identifier, x.title)}>
              {x.title}
            </a>
          )
        })
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

export default ShowComponent