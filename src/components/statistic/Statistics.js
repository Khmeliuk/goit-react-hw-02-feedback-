import s from "./statistic.module.css";
import PropTypes from "prop-types";
export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <ul>
      <li className={s.statisticList}>Good: {good}</li>
      <li className={s.statisticList}>Neutral: {neutral}</li>
      <li className={s.statisticList}>Bad: {bad}</li>
      <li className={s.statisticList}>Total: {total}</li>
      <li className={s.statisticList}>
        Positive feedback: {Math.round(positive)}%
      </li>
    </ul>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
