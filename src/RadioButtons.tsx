import React, { Component } from 'react';
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

type Props = {
  values: number[];
  defaultValue: number;
  handleRadioChange: (v: number) => void;
};

export default class RadioButtons extends Component<Props> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e) {
    this.props.handleRadioChange(e);
  }

  private defaultValue = this.props.values.find(val => val === this.props.defaultValue) || this.props.values[0];
  private buttons = this.props.values.map(val => (
    <ToggleButton key={val} value={val}>
      {val}
    </ToggleButton>
  ));

  render(): React.ReactNode {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={this.defaultValue} onChange={this.handleChange}>
          {this.buttons}
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}
