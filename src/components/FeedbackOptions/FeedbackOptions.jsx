import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    const optionsKeys = Object.keys(options);

    return (
      <ul className={s.optionsList}>
        {optionsKeys.map(option => (
          <li key={option} className={s.optionsItem}>
            <button
              type="button"
              name={option}
              className={s.optionsButton}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
