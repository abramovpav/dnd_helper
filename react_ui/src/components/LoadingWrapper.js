import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoadingWrapper extends Component {
  static propTypes = {
    isLoading: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { isLoading, children } = this.props;

    if (!(isLoading === false)) {
      return (
        <div className="loader-wrapper">
          <div className="loader loader-fixed">Loading...</div>
        </div>
      );
    }
    return children;
  }
}

export default LoadingWrapper;
