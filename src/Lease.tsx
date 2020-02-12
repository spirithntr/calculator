import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import CostInput from './inputs/CostInput';
import ZipcodeInput from './inputs/ZipCodeInput';
import SelectInput from './inputs/SelectInput';

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
          <Col>
            <SelectInput
              label="Mileage"
              options={[10000, 12000, 15000]}
              value={this.props.mileage}
              handleInputChange={v => this.handleKeyChange('mileage', v)}
            />
          </Col>
          <Col>
            <SelectInput
              label="Credit Score"
              options={this.creditScoreSteps}
              value={this.props.creditScore}
              handleInputChange={v => this.handleKeyChange('creditScore', v)}
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
            <SelectInput
              value={this.props.term}
              options={[24, 36, 48]}
              handleInputChange={v => this.handleKeyChange('term', v)}
              label="Terms"
            ></SelectInput>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
