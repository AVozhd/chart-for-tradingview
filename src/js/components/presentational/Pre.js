import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDropdownLeftSecondTitle } from '../../store/actions';
import PropTypes from 'prop-types';

class Pre extends React.Component {
  
  /*
  searchParams(chartBlocks, type = 'rsi') {
    let params = [];
    let res = [];
    chartBlocks.map(block => params.push(Object.values(block.options).filter(option => option.title !== 'none' && option.title !== 'condition')));
    params = params.filter(elem => elem.length > 0);
    params = params.map(elem => elem.length > 1 ? elem.map(object => Object.values(object)) : Object.values(elem[0]));
    params.forEach(array => Array.isArray(array[0]) ? array.map(elem => res.push(elem)) : res.push(array));
    const ParamsByType = {};
    res.map((array, index) => array[0] === type ? ParamsByType[index] = array[1] : ParamsByType);
    return [...new Set(Object.values(ParamsByType))];
  }
  */
  
  searchParams(chartBlocks) {
    let params = [];
    chartBlocks.map(block => params.push(Object.values(block.options).filter(option => option.title !== 'none' && option.title !== 'condition')));
    params = params.filter(elem => elem.length > 0);
    params = params.map(elem => elem.length > 1 ? elem.map(object => Object.values(object)) : Object.values(elem[0]));
    return params;
  }
  
  render() {
    const buyParams = this.searchParams(this.props.buyChartBlocks);
    const sellParams = this.searchParams(this.props.sellChartBlocks);
    
    console.log(sellParams);

    return (
      <pre className="result-script">
        <h1>
          Result script
        </h1>
        //@version=3
        <br />
        study(title="BUY:{ setScriptName(buyParams) };", overlay=true)
      </pre>
    )
  }
}

function setScriptName(params) {
  let res = [];
  params.forEach(array => Array.isArray(array[0]) ? res.push(prepareName(array)) : res.push(array[0]));
  return res.join(', ').toUpperCase();
}

function prepareName(array) {
  if (array[0][0] === array[1][0]) {
    return array[0][0];
  } else {
    return `${array[0][0]} + ${array[1][0]}`;
  }
}

/*
study(title="My Script", overlay=true)
myrsi = rsi(close, 14)
mycond = myrsi > 70
mycond2 = myrsi < 30
alertcondition(mycond, title='RSI higher 70', message='RSI higher 70!')
alertcondition(mycond2, title='RSI lower 30', message='RSI lower 30!')
plot(myrsi, color=green, linewidth=3)
*/

/*
study(title="RSI / STOCH RSI OVERLAY", shorttitle="STOCH V RSI")
src = close, len = input(14, minval=1, title="Length")
up = rma(max(change(src), 0), len)
down = rma(-min(change(src), 0), len)
rsi = down == 0 ? 100 : up == 0 ? 0 : 100 - (100 / (1 + up / down))
plot(rsi, color=green, linewidth=3)
band1 = hline(70, linestyle=solid)
band0 = hline(30, linestyle=solid)
fill(band1, band0, color=purple, transp=80)
*/

/*

//@version=2
study("RSI+MA", overlay=true)

// data series for RSI with length 14
rsi = rsi(close, 14)
// data series for Moving Average with length 9
ma = sma(close, 9)

// data series for buy signals:
//price should be below the moving average and RSI should be smaller than 40
buy_signals = close < ma and rsi < 30

// data series for sell signals:
//price should be above the moving average and RSI should be above 60
sell_signals = close > ma and rsi > 70

// draw some shapes on the chart if conditions are met
plotshape(buy_signals, style=shape.triangleup, text="up")
plotshape(sell_signals, style=shape.triangledown, text="down")

// create alert conditions so that alerts can be create via the add alerts dialog
alertcondition(buy_signals, title='Buy-Signal', message='price is below the MA and RSI is below 40')
alertcondition(sell_signals, title='Sell-Signal', message='price is above the MA and RSI is above 60')

*/

/*
 
//@version=3
study(title="RSI", overlay=true)
rsi = rsi(close, 14)
buy_signals = rsi < 30
sell_signals = rsi > 70
plotshape(buy_signals, style=shape.triangleup, text="up")
plotshape(sell_signals, style=shape.triangledown, text="down")
alertcondition(buy_signals, title='rsi < 30', message='RSI is below 30')
alertcondition(sell_signals, title='rsi > 70', message='RSI is above 70')
 
 */

/*
study("Example of alertcondition")
src = input(close)
ma_1 = sma(src, 20)
ma_2 = sma(src, 10)
c = cross(ma_1, ma_2)
alertcondition(c, title='Red crosses blue', message='Red and blue have crossed!')
plot(ma_1, color=red)
plot(ma_2, color=blue)
*/

Pre.propTypes = {
  buyChartBlocks: PropTypes.array,
  sellChartBlocks: PropTypes.array,
};

export default connect((state => ({
  buyChartBlocks: state.buyChart.blocks.filter(block => block.blockType === 'complex'),
  sellChartBlocks: state.sellChart.blocks.filter(block => block.blockType === 'complex'),
})), (dispatch => ({
  changeDropdownLeftSecondTitle: bindActionCreators(changeDropdownLeftSecondTitle, dispatch),
})))(Pre);
