import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  value: string;
  label: string;
  placeholder: string;
  handleInputChange: (v: number) => void;
};

export default class DownPayment extends Component<Props> {
  value = this.props.value;
  handleChange = (value: any) => {
    this.props.handleInputChange(value);
  };
  render(): React.ReactNode {
    return (
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          defaultValue={this.value}
          type="number"
          placeholder={this.props.placeholder}
          onChange={v => this.handleChange(v.target.value)}
        />
      </Form.Group>
    );
  }
}
