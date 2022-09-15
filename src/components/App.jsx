import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    if (!total) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(2));
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
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
}
