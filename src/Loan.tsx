import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import CostInput from './CostInput';
import RadioButtons from './RadioButtons';
import ZipcodeInput from './ZipCodeInput';

type Props = {
  creditScore: number;
  msrp: number;
  tradeIn: number;
  downPayment: number;
  apr: number;
  term: number;
  zipCode: string;
  handleChange: (v: any) => void;
};

export default class Loan extends Component<Props> {
  creditScoreSteps = [600, 650, 700, 750, 800, 850, 900];

  handleKeyChange = (key: keyof Props, value: any) => {
    return this.props.handleChange({ [key]: value });
  };

  render(): React.ReactNode {
    return (
      <Form>
        <Form.Row>
          <Col>
            <CostInput
              value={this.props.downPayment}
              handleInputChange={v => this.handleKeyChange('downPayment', v)}
              label="Down Payment"
            ></CostInput>
          </Col>
          <Col>
            <CostInput
              value={this.props.tradeIn}
              handleInputChange={v => this.handleKeyChange('tradeIn', v)}
              label="Trade-In"
            ></CostInput>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col className="m-2">
            <RadioButtons
              label="Terms"
              values={[12, 24, 36, 48, 72, 84]}
              defaultValue={this.props.term}
              handleRadioChange={v => this.handleKeyChange('term', v)}
            />
          </Col>
          <Col className="m-2">
            <RadioButtons
              label="Credit Score"
              values={this.creditScoreSteps}
              defaultValue={this.props.creditScore}
              handleRadioChange={v => this.handleKeyChange('creditScore', v)}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <ZipcodeInput
              value={this.props.zipCode}
              handleInputChange={v => this.handleKeyChange('zipCode', v)}
              label="Post Code"
            ></ZipcodeInput>
          </Col>
          <Col>
            <Col>
              <CostInput
                value={this.props.apr * 100}
                handleInputChange={v => this.handleKeyChange('apr', v / 100)}
                label="APR %"
              ></CostInput>
            </Col>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
