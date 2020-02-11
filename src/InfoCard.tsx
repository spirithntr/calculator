import React, { Component } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import { DealerInfo } from './mock/dealer';
import StarRatings from 'react-star-ratings';

import './InfoCard.scss';

type Props = {
  monthlyPay: number;
  taxes: number[];
  dealer: DealerInfo | null;
};

export default class InfoCard extends Component<Props> {
  render(): React.ReactNode {
    return (
      <Card className="m-2">
        <Card.Body>
          {this.props.dealer ? (
            <ListGroup variant="flush">
              <ListGroup.Item>MSRP: {this.props.dealer.msrp}</ListGroup.Item>
              <ListGroup.Item>vehicle: {this.props.dealer.vehicleName}</ListGroup.Item>
              <ListGroup.Item>monthly pay: {this.props.monthlyPay.toFixed(2)}</ListGroup.Item>
              <ListGroup.Item>taxes: {this.props.taxes.join(', ')}</ListGroup.Item>
              <ListGroup.Item>dealer: {this.props.dealer.name}</ListGroup.Item>
              <ListGroup.Item>phone number: {this.props.dealer.phone}</ListGroup.Item>
              <ListGroup.Item>
                rating:
                <StarRatings
                  className="m-2"
                  rating={this.props.dealer.rating}
                  starRatedColor="blue"
                  starDimension="1.5em"
                  numberOfStars={5}
                />
              </ListGroup.Item>
            </ListGroup>
          ) : (
            <Spinner id="loading" animation="border" />
          )}
        </Card.Body>
      </Card>
    );
  }
}
