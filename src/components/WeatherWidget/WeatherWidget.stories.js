import React from 'react';

import WeatherWidget from './WeatherWidget';

export default {
  title: 'WeatherWidget/WeatherWidget',
  component: WeatherWidget,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (
        <WeatherWidget />
    )
};


export const test = Template.bind({});
test.args = {

};