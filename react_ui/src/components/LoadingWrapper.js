import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoadingWrapper extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoading, children } = this.props;
    if (isLoading) {
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
