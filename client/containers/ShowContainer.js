import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showPicked } from '../redux/actions';
import ShowComponent from '../presentational/ShowComponent';

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    // use thunk to handle async actions - https://redux.js.org/docs/advanced/AsyncActions.html
    // console.log(this.props);
    setTimeout(() => {
      this.setState({ data: this.props.getShows });
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    // use thunk to handle async actions - https://redux.js.org/docs/advanced/AsyncActions.html
    // console.log(nextProps);
    setTimeout(() => {
      this.setState({ data: nextProps.getShows }, () => console.log(this.state.data[0].map(x => x.date)));
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.data && <ShowComponent shows={this.state.data[0]} />}
      </div>
    );
  }
}

ShowContainer.propTypes = {
  getShows: PropTypes.any,
};
ShowContainer.defaultProps = {
  getShows: null,
};

const mapStateToProps = ({ getShows }) => {
  return { getShows };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showClicked: (year, row) => {
      dispatch(showPicked(year, row));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
