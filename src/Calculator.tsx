import './Calculator.scss';

import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Calculator extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Loan" key="1">
          Content of Loan
        </TabPane>
        <TabPane tab="Lease" key="2">
          Content of Lease
        </TabPane>
      </Tabs>
    );
  }
}

export default Calculator;
