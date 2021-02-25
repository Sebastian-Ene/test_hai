import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
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
      Sector={text('Sector', 'Seed Round')}
      Industry={text('Industry', 'Industrials')}
      Stage={text('Stage', 'Biotechnology')}
      Currency={text('Curency', 'Eur')}
      RoomST={select(
        'Room State',
        { Open: 'Open', Closed: 'Closed', Finished: 'Finished' },
        'Open'
      )}
      Location={text('Location', 'Australia')}
      BadgeText={text('Badge Text', 'New')}
    />
  );
};
