//import React, { Component } from 'react';

import { useState } from 'react';

import variants from 'data/variants.json';

import { Section } from 'components/Section/Section.js';

import { Notification } from 'components/Notification/Notification.js';

import { Statistics } from 'components/Statistics/Statistics.js';

import { FeedBackOptions } from 'components/FeedBackOptions/FeedBackOptions.js';

import { StatTitle } from './WidgetFeedBackStyles.js';

const WidgetFeedBack = () => {
  const [valueGood, setGoodValue] = useState(0);

  const [valueNeutral, setGoodNeutral] = useState(0);

  const [valueBad, setBadValue] = useState(0);

  /*setGoodValue = valueGood => {
    valueGood += 1;
    this.state.good = valueGood;
    return valueGood;
  };

  setNeutralValue = valueNeutral => {
    valueNeutral += 1;
    this.state.neutral = valueNeutral;
    return valueNeutral;
  };

  setBadValue = valueBad => {
    valueBad += 1;
    this.state.bad = valueBad;
    return valueBad;
  };
  const state = {
    good:0,
    neutral: 0,
    bad: 0,
  };*/
  const changeState = option => {
    switch (option) {
      case 'good':
        setGoodValue(valueGood + 1);
        break;
      case 'neutral':
        setGoodNeutral(valueNeutral + 1);
        break;
      case 'bad':
        setBadValue(valueBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = (valueGood, valueNeutral, valueBad) => {
    return valueGood + valueNeutral + valueBad;
  };

  const countPositiveFeedbackPercentage = (
    valueGood,
    valueNeutral,
    valueBad
  ) => {
    return Math.round(
      (100 * valueGood) / (valueGood + valueNeutral + valueBad)
    );
  };

  return (
    <Section title="Please leave feedback">
      <FeedBackOptions options={variants} onLeaveFeedback={changeState} />
      <StatTitle>Statistics</StatTitle>

      {countTotalFeedback(valueGood, valueNeutral, valueBad) > 0 ? (
        <Statistics
          good={valueGood}
          neutral={valueNeutral}
          bad={valueBad}
          total={countTotalFeedback(valueGood, valueNeutral, valueBad)}
          positivePercentage={countPositiveFeedbackPercentage(
            valueGood,
            valueNeutral,
            valueBad
          )}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export { WidgetFeedBack };
