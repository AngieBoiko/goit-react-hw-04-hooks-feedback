import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const feedbackCounter = event => {
    if (event.target.textContent.toLowerCase() === 'good') {
      setGoodFeedback(state => state + 1);
    }
    if (event.target.textContent.toLowerCase() === 'neutral') {
      setNeutralFeedback(state => state + 1);
    }
    if (event.target.textContent.toLowerCase() === 'bad') {
      setBadFeedback(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = goodFeedback + neutralFeedback + badFeedback;
    return total;
  };
  const positivePercentage = () => {
    return Math.round((goodFeedback / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={feedbackCounter} />
      </Section>
      <Section title="Statistics">
        <Notification totalFeedbacks={countTotalFeedback()} />
        <Statistics
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          total={countTotalFeedback()}
          positivePercentage={positivePercentage()}
        />
      </Section>
    </div>
  );
}
