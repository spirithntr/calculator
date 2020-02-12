import React, { Component } from 'react';
import { Tabs, Tab, Col, Container, Row } from 'react-bootstrap';
import InfoCard from './InfoCard';
import { dealerInfo, DealerInfo } from './mock/dealer';
import Loan from './Loan';
import Lease from './Lease';

type State = {
  creditScore: number;
  msrp: number;
  tradeIn: number;
  downPayment: number;
  apr: number;
  term: number;
  dealerInfo?: DealerInfo | null;
  zipCode: string;
  mileage: number;
};

export default class App extends Component<any, State> {
  creditScoreSteps = [600, 650, 700, 750, 800, 850, 900];

  state = {
    creditScore: 750,
    tradeIn: 0,
    downPayment: 0,
    apr: 0,
    term: 24,
    msrp: 20000,
    dealerInfo: null,
    zipCode: '426000',
    mileage: 1000,
  };

  getMonthlyLoan = () => {
    const { msrp, tradeIn, downPayment, term, apr } = this.state;

    return ((msrp - tradeIn - downPayment) / term) * this.getCreditScoreValue() * apr;
  };

  getMonthlyLease = () => {
    const { msrp, tradeIn, downPayment, term, mileage } = this.state;

    return (((msrp - tradeIn - downPayment) * mileage) / 10000 / term) * this.getCreditScoreValue();
  };

  getCreditScoreValue = (): number => {
    const { creditScore } = this.state;
    if (creditScore >= 750) {
      return 0.95;
    } else if (creditScore >= 700) {
      return 1;
    } else if (creditScore >= 640) {
      return 1.05;
    } else {
      return 1.2;
    }
  };

  getDealerInfo = () =>
    new Promise<DealerInfo>(resolve => {
      setTimeout(() => resolve(dealerInfo), 1000);
    });

  componentDidMount() {
    this.getDealerInfo().then(dealerInfo => this.setState({ dealerInfo }));
  }

  render(): React.ReactNode {
    return (
      <Container>
        <Row>
          <Col>
            <Tabs id="uncontrolled-tab-example">
              <Tab eventKey="loan" title="Loan">
                <Loan
                  creditScore={this.state.creditScore}
                  downPayment={this.state.downPayment}
                  tradeIn={this.state.tradeIn}
                  zipCode={this.state.zipCode}
                  msrp={this.state.msrp}
                  term={this.state.term}
                  apr={this.state.apr}
                  handleChange={v => this.setState(v)}
                ></Loan>
              </Tab>
              <Tab eventKey="lease" title="Lease">
                <Lease
                  creditScore={this.state.creditScore}
                  downPayment={this.state.downPayment}
                  mileage={this.state.mileage}
                  zipCode={this.state.zipCode}
                  tradeIn={this.state.tradeIn}
                  term={this.state.term}
                  handleChange={v => this.setState(v)}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col>
            <InfoCard
              dealer={this.state.dealerInfo}
              monthlyPay={this.getMonthlyLoan()}
              taxes={this.state.zipCode.split('').map(num => +num * 11)}
            ></InfoCard>
          </Col>
        </Row>
      </Container>
    );
  }
}
