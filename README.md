# rc-timeline

React Vertical Timeline Component.

[![rc-calendar](screenshot.png)]

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'rc-timeline';
const data = [
    {
        date: new Date(),
        color: '#00ff00',
        title: 'Splunk',
        body: 'Service Response time show'
    },
    {
        date: new Date(),
        color: '#ff0000',
        title: 'Splunk',
        body: 'Service Response time show'
    },
    {
        date: new Date(),
        color: '#ff0000',
        title: 'Splunk',
        body: 'Service Response time show'
    },
    {
        date: new Date(),
        color: '#ff0000',
        title: 'Splunk',
        body: 'Service Response time show'
    },
    {
        date: new Date(),
        color: '#ff0000',
        title: 'Splunk',
        body: 'Service Response time show'
    }
];
ReactDOM.render(<Timeline data={data} />, rootEl);
```