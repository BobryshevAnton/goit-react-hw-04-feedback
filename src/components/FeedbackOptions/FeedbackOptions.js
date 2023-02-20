import css from '../FeedBack/feedBack.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.feedBack__sectionButton}>
    {options.map((elem, index) => (
      <button
        key={index}
        name={elem}
        onClick={onLeaveFeedback}
        className={css.feedBack__button}
      >
        {elem}
      </button>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
