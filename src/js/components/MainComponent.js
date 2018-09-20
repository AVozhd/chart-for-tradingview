import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChartType,
         addBlockToChart,
         recalcSvgParams,
         removeBlockFromChart,
         editBlockParams,
         changeFormState } from '../store/actions';
import BuyChart from './container/BuyChart';
import SellChart from './container/SellChart';
import ChartTypeSelectorInput from './presentational/ChartTypeSelectorInput';
import Form from './container/Form';
import PropTypes from 'prop-types';


class MainComponent extends React.Component {
  render() {
    const divStyle = {
      // position: 'absolute',
      // top:
    };
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
                        removeBlock={ this.props.removeBlockFromChart }
                        svgParams={ this.props.svg }
                        editBlockParams={ this.props.editBlockParams }
                        changeFormState={ this.props.changeFormState }
                        form={ this.props.form } />
              :
              <SellChart />
          }
        </svg>
        <div className="relative">
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
          <div style={ divStyle }>
            { this.props.form.active ? <Form /> : '' }
          </div>
        </div>
      </div>
    )
  }
}

MainComponent.propTypes = {
  selectedChart: PropTypes.string,
  chartType: PropTypes.string,
  svg: PropTypes.object,
  buyChart: PropTypes.object,
  form: PropTypes.object,
  changeChartType: PropTypes.func,
  addBlockToChart: PropTypes.func,
  recalcSvgParams: PropTypes.func,
  removeBlockFromChart: PropTypes.func,
  editBlockParams: PropTypes.func,
  changeFormState: PropTypes.func,
};

export default connect((state => ({
  selectedChart: state.selectedChart,
  chartType: state.chartType,
  svg: state.svg,
  buyChart: state.buyChart,
  form: state.form,
})), (dispatch => ({
  changeChartType: bindActionCreators(changeChartType, dispatch),
  addBlockToChart: bindActionCreators(addBlockToChart, dispatch),
  recalcSvgParams: bindActionCreators(recalcSvgParams, dispatch),
  removeBlockFromChart: bindActionCreators(removeBlockFromChart, dispatch),
  editBlockParams: bindActionCreators(editBlockParams, dispatch),
  changeFormState: bindActionCreators(changeFormState, dispatch),
})))(MainComponent);
