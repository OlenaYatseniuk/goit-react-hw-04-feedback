import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  const data = {
    good: good,
    bad: bad,
    neutral: neutral,
    total: total,
    positivePercentage: positivePercentage,
  };

  const dataKeys = Object.keys(data);

  return (
    <ul className={s.statisticsList}>
      {dataKeys.map(item => (
        <li key={item} className={s.statisticsItem}>
          <span className={s.statisticsName}>
            {item === 'positivePercentage' ? 'Positive percentage' : item}
          </span>
          <span>
            {item === 'positivePercentage' ? `${data[item]}%` : data[item]}
          </span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
