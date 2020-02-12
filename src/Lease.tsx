import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import CostInput from './CostInput';
import RadioButtons from './RadioButtons';
import ZipcodeInput from './ZipCodeInput';
import SelectInput from './SelectInput';

type Props = {
  downPayment: number;
  tradeIn: number;
  zipCode: string;
  term: number;
  mileage: number;
  creditScore: number;
  handleChange: (v: any) => void;
};

export default class Lease extends Component<Props> {
  creditScoreSteps = [600, 650, 700, 750, 800, 850, 900];

  handleKeyChange = (key: keyof Props, value: number | string) => this.props.handleChange({ [key]: value });

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
              <SelectInput
                value={this.props.term}
                options={[24, 36, 48]}
                handleInputChange={v => this.handleKeyChange('term', v)}
                label="Terms"
              ></SelectInput>
            </Col>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
