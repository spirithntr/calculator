import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  value: number;
  options: number[];
  label: string;
  handleInputChange: (v: any) => void;
};

export default class SelectInput extends Component<Props> {
  handleChange = (value: any) => {
    this.props.handleInputChange(value);
  };
  render(): React.ReactNode {
    const options = this.props.options.map((option, index) => <option key={index}>{`${option}`}</option>);
    return (
      <Form.Group className="m-2" controlId="exampleForm.ControlSelect1">
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          as="select"
          className="w-100"
          value={`${this.props.value}`}
          onChange={v => this.handleChange(+(v.target as any).value)}
        >
          {options}
        </Form.Control>
      </Form.Group>
    );
  }
}
