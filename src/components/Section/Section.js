import PropTypes from 'prop-types';
import css from '../FeedBack/feedBack.module.css';

export const Section = ({ title, children }) => (
  <>
    <h2 className={css.feedBack__title}>{title}</h2>
    {children}
  </>
);
Section.propTypes = {
  title: PropTypes.string,
  chilren: PropTypes.node,
};
