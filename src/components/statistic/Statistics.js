import s from "./statistic.module.css";

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
