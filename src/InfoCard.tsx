import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

type Props = {
  msrp?: number;
  vehicle?: string;
  monthlyPay: number;
  taxes: number[];
  dealerName: string;
  dealerPhone: string;
  dealerRating: number;
};

export default class InfoCard extends Component<Props> {
  render(): React.ReactNode {
    return (
      <Card className="m-2">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>MSRP: {this.props.msrp}</ListGroup.Item>
            <ListGroup.Item>vehicle: {this.props.vehicle}</ListGroup.Item>
            <ListGroup.Item>monthly pay: {this.props.monthlyPay.toFixed(2)}</ListGroup.Item>
            <ListGroup.Item>taxes: {this.props.taxes}</ListGroup.Item>
            <ListGroup.Item>dealer: {this.props.dealerName}</ListGroup.Item>
            <ListGroup.Item>phone number: {this.props.dealerPhone}</ListGroup.Item>
            <ListGroup.Item>rating: {this.props.dealerRating}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
