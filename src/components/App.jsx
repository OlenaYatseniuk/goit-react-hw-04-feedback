import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const stateMap = {
    good: setGood,
    bad: setBad,
    neutral: setNeutral,
  };

  const onLeaveFeedback = event => {
    const { name } = event.target;
    stateMap[name](prev => prev + 1);
  };

  const countTotalFeedback = () => {
    const values = Object.values({ good, bad, neutral });
    return values.reduce((acc, item) => (acc += item), 0);
  };

  const countPositiveFeedbackPercentage = total => {
    if (!total) {
      return 0;
    }

    return Number(((good / total) * 100).toFixed(2));
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <>
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section>
        {total ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="You haven't leave any feedback yet =(" />
        )}
      </Section>
    </>
  );
}
