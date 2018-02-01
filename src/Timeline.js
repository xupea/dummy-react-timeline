import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';

const styles = {
  'rc-timeline': {
    width: '100%'
  },
  'rc-timeline-ul': {
    margin: 0,
    padding: 0,
    fontSize: 10
  },
  'rc-timeline-li': {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'flex-start'
  },
  'rc-timeline-date': {
    minWidth: 43,
    textAlign: 'right'
  },
  'rc-timeline-item': {
    display: 'flex'
  },
  'rc-timeline-flow': {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2
  },
  'rc-timeline-line': {
    borderLeft: '1px solid grey',
    height: '100%',
    marginLeft: 3
  },
  'rc-timeline-title': {
    fontSize: 10,
    fontWeight: 'bold'
  },
  'rc-timeline-body': {
    marginTop: 2,
    fontSize: 10,
    marginBottom: 10
  }
};

export default class Timeline extends Component {
  render() {
    const { data, leftRender, rightRender } = this.props;  
    return (
      <div style={styles['rc-timeline']}>
        <ul style={styles['rc-timeline-ul']}>
          {
            data.map((item, index, array) => {
              let iconStyle = {
                width: 7,
                height: 7,
                background: item.color || '#ff0000',
                borderRadius: '50%',
              };
              let date;
              if (moment.isDate(item.date)) {
                date = moment(item.date);
              } else if (moment.isMoment(item.date)) {
                date = item.date;
              }
              return (
                <li style={styles['rc-timeline-li']} key={index.toString()}>
                  {leftRender ? leftRender(item.date) : (<div style={styles['rc-timeline-date']}>
                    <div>{date.format('DD MMM')}</div>
                    <div>{date.format('HH:mm A')}</div>
                  </div>)}
                  <div style={styles['rc-timeline-item']}>
                    <div style={styles['rc-timeline-flow']}>
                      <div style={iconStyle}></div>
                      { (index === array.length - 1) ? null : <div style={styles['rc-timeline-line']}></div> }
                    </div>
                    {rightRender ? rightRender(item) : (<div>
                      <div style={styles['rc-timeline-title']}>{item.title}</div>
                      <div style={styles['rc-timeline-body']}>{item.body}</div>
                    </div>)}
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
