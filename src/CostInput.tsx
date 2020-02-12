import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  value: number;
  label: string;
  handleInputChange: (v: number) => void;
};

export default class CostInput extends Component<Props> {
  handleChange = (value: any) => {
    this.props.handleInputChange(value);
  };

  render(): React.ReactNode {
    return (
      <Form.Group className="m-2" controlId="exampleForm.ControlInput1">
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control value={`${this.props.value}`} type="number" onChange={v => this.handleChange(+v.target.value)} />
      </Form.Group>
    );
  }
}
