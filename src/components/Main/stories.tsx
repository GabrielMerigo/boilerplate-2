import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Kitbebe: Story = () => 
<Main title={text(`Title`, `teste`)} description={text(`Description`, `Beni`)} />
