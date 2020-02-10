import React, { Component } from 'react';
import { Tabs, Tab, Form, Col } from 'react-bootstrap';
import DownPayment from './DownPayment';
import RadioButtons from './RadioButtons';

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <Tabs id="uncontrolled-tab-example">
        <Tab eventKey="loan" title="Loan">
          <Form>
            <Form.Row>
              <Col>
                <DownPayment
                  value="123"
                  handleInputChange={e => console.log(e)}
                  label="test"
                  placeholder="1"
                ></DownPayment>
              </Col>
              <Col>{/* <DownPayment></DownPayment> */}</Col>
            </Form.Row>
          </Form>
        </Tab>
        <Tab eventKey="lease" title="Lease">
          <Col>
            <RadioButtons values={[12, 24, 36, 48, 72, 84]} defaultValue={4} handleRadioChange={e => console.log(e)} />
          </Col>
          <Col>
            <RadioButtons values={[1, 2, 3, 4, 5]} defaultValue={4} handleRadioChange={e => console.log(e)} />
          </Col>
        </Tab>
      </Tabs>
    );
  }
}
