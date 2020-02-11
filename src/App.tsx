import React, { Component } from 'react';
import { Tabs, Tab, Form, Col, Container, Row } from 'react-bootstrap';
import CostInput from './CostInput';
import RadioButtons from './RadioButtons';
import ZipcodeInput from './ZipCodeInput';
import InfoCard from './InfoCard';
import { dealerInfo, DealerInfo } from './mock/dealer';

type State = {
  creditScore: number;
  msrp: number;
  tradeIn: number;
  downPayment: number;
  apr: number;
  term: number;
  dealerInfo?: DealerInfo | null;
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
  };

  getMonthlyLoan = () => {
    const { msrp, tradeIn, downPayment, term } = this.state;
    const mileage = 1000;

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
                <Form>
                  <Form.Row>
                    <Col>
                      <CostInput
                        value={this.state.downPayment}
                        handleInputChange={e => this.setState({ downPayment: e })}
                        label="Down Payment"
                      ></CostInput>
                    </Col>
                    <Col>
                      <CostInput
                        value={this.state.tradeIn}
                        handleInputChange={e => this.setState({ tradeIn: e })}
                        label="Trade-In"
                      ></CostInput>
                    </Col>
                    <Col>
                      <CostInput
                        value={this.state.apr * 100}
                        handleInputChange={e => this.setState({ apr: e / 100 })}
                        label="APR %"
                      ></CostInput>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col className="m-2">
                      <RadioButtons
                        label="Terms"
                        values={[12, 24, 36, 48, 72, 84]}
                        defaultValue={this.state.term}
                        handleRadioChange={e => this.setState({ term: e })}
                      />
                    </Col>
                    <Col className="m-2">
                      <RadioButtons
                        label="Credit Score"
                        values={this.creditScoreSteps}
                        defaultValue={this.state.creditScore}
                        handleRadioChange={e => this.setState({ creditScore: e })}
                      />
                    </Col>
                  </Form.Row>
                  <ZipcodeInput
                    value="426000"
                    handleInputChange={e => console.log('zip: ', e)}
                    label="Post Code"
                  ></ZipcodeInput>
                </Form>
              </Tab>
              <Tab eventKey="lease" title="Lease">
                <Col>
                  <RadioButtons
                    label="Terms"
                    values={[12, 24, 36, 48, 72, 84]}
                    defaultValue={4}
                    handleRadioChange={e => console.log(e)}
                  />
                </Col>
                <Col>
                  <RadioButtons
                    label="Credit Score"
                    values={[1, 2, 3, 4, 5]}
                    defaultValue={4}
                    handleRadioChange={e => console.log(e)}
                  />
                </Col>
              </Tab>
            </Tabs>
          </Col>
          <Col>
            <InfoCard
              dealer={this.state.dealerInfo}
              monthlyPay={this.getMonthlyLoan()}
              taxes={'426000'.split('').map(num => +num * 11)}
            ></InfoCard>
          </Col>
        </Row>
      </Container>
    );
  }
}
