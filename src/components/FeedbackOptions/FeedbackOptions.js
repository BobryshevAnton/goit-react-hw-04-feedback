import PropTypes from 'prop-types';
import css from '../FeedBack/feedBack.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.feedBack__sectionButton}>
    {options.map((elem, index) => (
      <button
        className={css.feedBack__button}
        key={index}
        name={elem}
        onClick={onLeaveFeedback}
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
