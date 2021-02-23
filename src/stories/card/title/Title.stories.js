import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Title } from './Title';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Test/Title',
  component: Title,
  decorators: [withKnobs],
};
const label = 'Title';
const defaultValue = 'Title';
export const TitleSB = () => <Title title={text(label, defaultValue)}></Title>;
