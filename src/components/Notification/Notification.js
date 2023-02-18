import PropTypes from 'prop-types';
import css from '../FeedBack/feedBack.module.css';

export const Notification = ({ message }) => (
  <h2 className={css.feedBack__title}>{message}</h2>
);
Notification.propTypes = {
  message: PropTypes.string,
};
