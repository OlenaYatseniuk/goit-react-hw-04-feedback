import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
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

FeedbackOptions.propTypes = {
  options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
