import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProgressBar extends Component {
  static propTypes = {
    // eslint-disable-next-line consistent-return
    completed: ((props, propName) => {
      if (typeof props[propName] !== 'number') {
        return ProgressBar.throwError('Invalid Props: "completed" should ∈ ℝ ');
      }
      if (props[propName] < 0 || props[propName] > 100) {
        return ProgressBar.throwError('Invalid Props: "completed" should be between 0 and 100');
      }
    }),
    title: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    animation: PropTypes.number,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    completed: 0,
    color: '#18bc9c',
    backgroundColor: '#ecf0f1',
    animation: 200,
    height: 25,
    title: '',
  };

  static throwError(args) {
    return new Error(...args);
  }

  render() {
    const {
      color, completed, animation, height, className, title, children, backgroundColor, ...rest
    } = this.props;

    const barStyle = {
      backgroundColor: color,
      width: `${completed}%`,
      transition: `width ${animation}ms`,
      height,
    };

    const backgroundStyle = {
      backgroundColor,
      position: 'relative',
    };

    const textStyle = {
      position: 'absolute',
      top: '17%',
      left: '44%',
    };

    return (
      <div className={`progressbar-container ${className || ''}`} style={backgroundStyle} {...rest}>
        <div className="progressbar-progress" style={barStyle}>{children}</div>
        <div className="progress-text" style={textStyle}>{title}</div>
      </div>
    );
  }
}

export default ProgressBar;
