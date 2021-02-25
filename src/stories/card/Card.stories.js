import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Test/Card',
  component: Card,
  decorators: [withKnobs],
};

const label = 'CategoryBar';
const defaultValue = 'Title';

export const CardSB = () => {
  return (
    <Card
      Category={text(label, defaultValue)}
      Title={text('Title', 'Engineering Unlimited Pty Ltd')}
      Percent={number('Progress Percent', '50', {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      })}
      RaiseAmount={text('Raise Amount', '$100M AUD')}
    />
  );
};
