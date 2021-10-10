import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => {
    return (
      <button
        className={s.optionButton}
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    );
  });
}

FeedbackOptions.prototype = {
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
};
