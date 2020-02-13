import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

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
    const symbol = this.props.label === 'APR' ? '%' : '$';
    return (
      <Form.Group className="m-2" controlId="exampleForm.ControlInput1">
        <Form.Label>{this.props.label}</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">{symbol}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={`${this.props.value}`}
            type="number"
            onChange={v => this.handleChange(+v.target.value)}
          />
        </InputGroup>
      </Form.Group>
    );
  }
}
