import { useState } from 'react';
import css from './feedBack.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const { name } = event.target;

    if (name === 'good') {
      setGood(prevState => prevState + 1);
      return;
    } else if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    } else if (name === 'bad') {
      setBad(prevState => prevState + 1);
      return;
    }
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    let result = Math.round((good * 100) / (good + neutral + bad));
    return result;
  };

  return (
    <div className={css.feedBack__section}>
      <h1>Please leave feedback</h1>
      <div className={css.feedBack__sectionButton}></div>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
