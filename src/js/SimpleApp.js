import React from 'react';
import BuyChart from './components/container/BuyChart';
import SellChart from './components/container/SellChart';
import Form from './components/container/Form';
import ChartTypeSelector from './components/presentational/ChartTypeSelector';
  
export default class SimpleApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.showBuy = this.showBuy.bind(this);
    this.showSell = this.showSell.bind(this);
    // this.changeSVG = this.changeSVG.bind(this);
    this.makeFormActive = this.makeFormActive.bind(this);
    // this.dispatch = props.dispatch.bind(this);
    
    
    this.state = {
      buyBtn: { active: true },
      sellBtn: { active: false },
      form: {
        active: false
      }
    }
  }
  
  showBuy() {
    if(this.state.chartType !== 'buy') {
      this.setState({
        chartType: 'buy',
        buyBtn: { active: true },
        sellBtn: { active: false }
      });
    }
  }
  
  showSell() {
    if(this.state.chartType !== 'sell') {
      this.setState({
        chartType: 'sell',
        buyBtn: { active: false },
        sellBtn: { active: true }
      });
    }
  }
  
  // changeSVG() {
  //   this.setState((prevState, props) => ({
  //     svg: {
  //       width: prevState.svg.width,
  //       height: prevState.svg.height + 200
  //     }
  //   }));
  // }
  
  makeFormActive() {
    this.setState({
      form: {
        active: true
      }
    });
  }
  
  render() {
    console.log(this.props);
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox={"0 0 " + this.props.svg.width + " " + this.props.svg.height}>
          {this.props.chartType === 'buy' ?
            <BuyChart makeFormActive={this.makeFormActive}
                      changeSVG={this.changeSVG} />
            : <SellChart makeFormActive={this.makeFormActive}
                         changeSVG={this.changeSVG} /> }
        </svg>
        <ChartTypeSelector />
      </div>
    )
  }
}
