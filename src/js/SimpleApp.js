import React from 'react';
import BuyChart from './components/container/BuyChart';
import SellChart from './components/container/SellChart';
import Button from './components/presentational/Button';

export default class SimpleApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.showBuy = this.showBuy.bind(this);
    this.showSell = this.showSell.bind(this);
    
    this.state = {
      chartType: 'buy',
      buyBtn: {
        active: true
      },
      sellBtn: {
        active: false
      }
    }
  }
  
  showBuy() {
    if(this.state.chartType !== 'buy') {
      this.setState({
        chartType: 'buy',
        buyBtn: {
          active: true
        },
        sellBtn: {
          active: false
        }
      });
    }
  }
  
  showSell() {
    if(this.state.chartType !== 'sell') {
      this.setState({
        chartType: 'sell',
        buyBtn: {
          active: false
        },
        sellBtn: {
          active: true
        }
      });
    }
  }
  
  render() {
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 300 500"
             className={"svg" + this.props.type} >
          {this.state.chartType === 'buy' ? <BuyChart /> : <SellChart /> }
        </svg>
        <div>
          {/*<Button title="Buy" onClick={this.showBuy} />*/}
          {/*<Button title="Sell" onClick={this.showSell} />*/}
          
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

// <button className="btn btn-outline-primary" onClick={this.addBlock}>add block</button>
