import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  value: string;
  label: string;
  handleInputChange: (v: number) => void;
};

export default class ZipcodeInput extends Component<Props> {
  value = this.props.value;
  handleChange = (value: any) => {
    this.props.handleInputChange(value);
  };
  render(): React.ReactNode {
    return (
      <Form.Group className="m-2" controlId="exampleForm.ControlInput1">
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          pattern="[0-9]{6}"
          defaultValue={this.value}
          type="text"
          onChange={v => this.handleChange(v.target.value)}
        />
      </Form.Group>
    );
  }
}
