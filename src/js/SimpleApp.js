import React from 'react';
import BuyChart from './components/container/BuyChart';
import SellChart from './components/container/SellChart';

export default class SimpleApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.showBuy = this.showBuy.bind(this);
    this.showSell = this.showSell.bind(this);
    this.changeSVG = this.changeSVG.bind(this);
    
    this.state = {
      chartType: 'buy',
      buyBtn: { active: true },
      sellBtn: { active: false },
      svg: {
        width: 300,
        height: 400
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
  
  changeSVG() {
    this.setState((prevState, props) => ({
      svg: {
        width: prevState.svg.width,
        height: prevState.svg.height + 200
      }
    }));
  }
  
  render() {
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox={"0 0 " + this.state.svg.width + " " + this.state.svg.height}
             className={"svg" + this.props.type} >
          {this.state.chartType === 'buy' ? <BuyChart changeSVG={this.changeSVG} /> : <SellChart changeSVG={this.changeSVG} /> }
        </svg>
        <div>
          <span className="btn">
            Choose chart type:
          </span>
          <button className={this.state.buyBtn.active ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}
                  onClick={this.showBuy}>
            Buy
          </button>
          <button className={this.state.sellBtn.active ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}
                  onClick={this.showSell}>
            Sell
          </button>
        </div>
      </div>
    )
  }
}

