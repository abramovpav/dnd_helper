import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';


class HPBar extends Component {
  static propTypes = {
    hp: PropTypes.number,
    maxHP: PropTypes.number,
  };

  static defaultProps = {
    hp: 0,
    maxHP: 1,
  };

  static getColor(ratio) {
    if (ratio > 50) {
      return '#18bc9c';
    } else if (ratio > 25) {
      return '#f39c12';
    }
    return '#e74c3c';
  }

  static throwError(args) {
    return new Error(...args);
  }

  render() {
    const { hp, maxHP } = this.props;

    const ratio = Math.floor((hp / maxHP) * 100);
    const title = `HP: ${hp}`;
    return (
      <ProgressBar
        completed={ratio}
        title={title}
        color={HPBar.getColor(ratio)}
      />
    );
  }
}

export default HPBar;
