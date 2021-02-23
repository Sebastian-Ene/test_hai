import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { CategoryBar } from './CategoryBar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Test/CategoryBar',
  component: CategoryBar,
  decorators: [withKnobs],
};
const label = 'CategoryBar';
const defaultValue = 'Title';
export const CategoryBarSB = () => (
  <CategoryBar label={text(label, defaultValue)}></CategoryBar>
);
