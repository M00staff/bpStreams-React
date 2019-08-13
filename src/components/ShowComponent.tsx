import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { showRequest } from '../Reducer';
import { StateContext } from '../Provider';

interface ShowListItem {
  date: string;
  identifier: string;
  title: string;
  years: string;
}

const ShowComponent = () => {
  // without abstracting the useContext
  const { state, dispatch } = useContext(StateContext);
  // const [state, dispatch] = useStateValue();

  return (
    <div>
      {
        state.showList
      ?
        state.showList.map((x: ShowListItem) => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={x.identifier}
              className="allShows"
              role="presentation"
              onClick={() => showRequest(dispatch, x.identifier, x.title)}
            >
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