import React, { Component } from 'react';
import classnames from 'classnames';

export default class Timeline extends Component {
  render() {
    const { data } = this.props;  
    return (
      <div className="App">
        <div className="vtimeline">
          <ul>
            {
              data.map((item, index, array) => {
                let iconStyle = {
                  width: 7,
                  height: 7,
                  background: item.color,
                  borderRadius: '50%',
                };
                return (
                  <li>
                    <div className="vtimeline-date">
                      <div>21 Jan</div>
                      <div>10:05 AM</div>
                    </div>
                    <div className="vtimeline-item">
                      <div className="vtimeline-flow">
                        <div style={iconStyle}></div>
                        { (index === array.length - 1) ? null : <div className="vertical-line"></div> }
                      </div>
                      <div className="vtimeline-content">
                        <div className="title">Splunk alert</div>
                        <div className="body">Service Response time slow, ervice Response time slow, ervice Response time slow, ervice Response time slow, ervice Response time slow, ervice Response time slow</div>
                      </div>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
