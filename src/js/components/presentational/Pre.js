import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDropdownLeftSecondTitle } from '../../store/actions';
import PropTypes from 'prop-types';

class Pre extends React.Component {
  
  searchParams(chartBlocks, type) {
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
  
  render() {
    const buyRsiParams = this.searchParams(this.props.buyChartBlocks, 'rsi');
    const sellRsiParams = this.searchParams(this.props.sellChartBlocks, 'rsi');
    console.log('RSI BUY params', buyRsiParams);
    console.log('RSI SELL params', sellRsiParams);
    return (
      <pre className="result-script">
        <h1>
          Result script
        </h1>
        study("My Script")
        <br />
        fast = 12, slow = 26
        <br />
        fastMA = ema(close, fast)
        <br />
        slowMA = ema(close, slow)
        <br />
        macd = fastMA - slowMA
        <br />
        signal = sma(macd, 9)
        <br />
        plot(macd, color=blue)
        <br />
        plot(signal, color=orange)
      </pre>
    )
  }
}

/*
study(title="My Script", overlay=true)
myrsi = rsi(close, 14)
mycond = myrsi > 70
mycond2 = myrsi < 30
alertcondition(mycond, title='RSI higher 70', message='RSI higher 70!')
alertcondition(mycond2, title='RSI lower 30', message='RSI lower 30!')
plot(myrsi, color=red)
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
