import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../FeedBack/feedBack.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.feedBack__sectionCounter}>
        <p className={css.feedBack__list}>
          Good:
          <span className={css.feedBack__listSpan}> {good}</span>
        </p>
        <p className={css.feedBack__list}>
          Neutral:
          <span className={css.feedBack__listSpan}>{neutral}</span>
        </p>
        <p className={css.feedBack__list}>
          Bad:
          <span className={css.feedBack__listSpan}> {bad}</span>
        </p>
        <p className={css.feedBack__list}>
          Total:
          <span className={css.feedBack__listSpan}>{total}</span>
        </p>
        <p className={css.feedBack__list}>
          Feedback:
          <span className={css.feedBack__listSpan}>
            {!positivePercentage ? 0 : positivePercentage}%
          </span>
        </p>
      </div>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.node,
};
