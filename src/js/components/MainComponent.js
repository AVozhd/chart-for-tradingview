import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChartType } from '../store/actions';
import BuyChart from './container/BuyChart';
import SellChart from './container/SellChart';
import ChartTypeSelectorInput from './presentational/ChartTypeSelectorInput';


class MainComponent extends React.Component {
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
        <div>
          Choose chart type:
          <ChartTypeSelectorInput value="buy"
                                  id="exampleRadios1"
                                  title="Buy"
                                  checked={this.props.selectedChart} />
          <ChartTypeSelectorInput value="sell"
                                  id="exampleRadios2"
                                  title="Sell"
                                  checked={this.props.selectedChart} />
        </div>
      </div>
    )
  }
}

const putStateToProps = (state) => {
  return {
    selectedChart: state.selectedChart,
    chartType: state.chartType,
    svg: {
      width: state.svg.width,
      height: state.svg.height,
    },
  };
};

const putActionsToProps = (dispatch) => {
  return {
    changeChartType: bindActionCreators(changeChartType, dispatch),
  }
};

export default connect(putStateToProps, putActionsToProps)(MainComponent);
