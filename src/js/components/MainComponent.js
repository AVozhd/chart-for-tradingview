import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChartType, addBlockToChart, recalcSvgParams, removeBlockFromChart } from '../store/actions';
import BuyChart from './container/BuyChart';
import SellChart from './container/SellChart';
import ChartTypeSelectorInput from './presentational/ChartTypeSelectorInput';


class MainComponent extends React.Component {
  render() {
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox={"0 0 " + this.props.svg.width + " " + this.props.svg.height}>
          {
            this.props.chartType === 'buy' ?
              <BuyChart options={ this.props.buyChart }
                        onChange={ this.props.addBlockToChart }
                        recalcSvgParams={ this.props.recalcSvgParams }
                        svgParams={this.props.svg} />
              :
              <SellChart />
          }
        </svg>
        <div>
          Choose chart type:
          <ChartTypeSelectorInput title="Buy"
                                  value="buy"
                                  checked={ this.props.selectedChart === 'buy' }
                                  onChange={ this.props.changeChartType } />
          <ChartTypeSelectorInput title="Sell"
                                  value="sell"
                                  checked={ this.props.selectedChart === 'sell' }
                                  onChange={ this.props.changeChartType } />
        </div>
      </div>
    )
  }
}

export default connect((state => ({
  selectedChart: state.selectedChart,
  chartType: state.chartType,
  svg: state.svg,
  buyChart: state.buyChart,
})), (dispatch => ({
  changeChartType: bindActionCreators(changeChartType, dispatch),
  addBlockToChart: bindActionCreators(addBlockToChart, dispatch),
  recalcSvgParams: bindActionCreators(recalcSvgParams, dispatch),
  removeBlockFromChart: bindActionCreators(removeBlockFromChart, dispatch),
})))(MainComponent);
