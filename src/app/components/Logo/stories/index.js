import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { text } from '@storybook/addon-knobs';

import Notes from './Notes.md';

storiesOf('Button', module)
  .addDecorator(story => <div style={ { textAlign: 'center' } }>{story()}</div>)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('as dynamic variables', () => {
    const name = text('Name', 'My Button');

    return (
      <Button>{name}</Button>
    );
  })
  .add('with Notes', () => <Button>Notes</Button>, {
    notes: { markdown: Notes }
  });
