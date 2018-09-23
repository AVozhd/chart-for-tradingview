import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChartType,
         recalcSvgParams,
         changeFormState,
         removeBlockFromBuyChart,
         addBlockToBuyChart,
         editBlockParamsBuyChart,
         removeBlockFromSellChart,
         addBlockToSellChart,
         editBlockParamsSellChart,
         changeDropdownLeftFirstTitle,
         changeDropdownLeftSecondTitle,
         changeDropdownRightFirstTitle,
         changeDropdownRightSecondTitle,
         saveParamsToBuyChartBlock,
         saveParamsToSellChartBlock,
         getScript } from '../store/actions';
import BuyChart from './container/BuyChart';
import SellChart from './container/SellChart';
import ChartTypeSelectorInput from './presentational/ChartTypeSelectorInput';
import Form from './container/Form';
import PropTypes from 'prop-types';
import Pre from './presentational/Pre';


class MainComponent extends React.Component {
  render() {
    const divStyle = {
      position: 'absolute',
      top: this.props.form.top,
    };
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox={ this.props.chartType === 'buy' ?
               "0 0 " + this.props.svg.buyChart.width + " " + this.props.svg.buyChart.height
               :
               "0 0 " + this.props.svg.sellChart.width + " " + this.props.svg.sellChart.height }>
          {
            this.props.chartType === 'buy' ?
              <BuyChart
                options={ this.props.buyChart }
                onChange={ this.props.addBlockToBuyChart }
                recalcSvgParams={ this.props.recalcSvgParams }
                removeBlock={ this.props.removeBlockFromBuyChart }
                svgParams={ this.props.svg }
                editBlockParams={ this.props.editBlockParamsBuyChart }
                changeFormState={ this.props.changeFormState }
                form={ this.props.form }
              />
              :
              <SellChart
                options={ this.props.sellChart }
                onChange={ this.props.addBlockToSellChart }
                recalcSvgParams={ this.props.recalcSvgParams }
                removeBlock={ this.props.removeBlockFromSellChart }
                svgParams={ this.props.svg }
                editBlockParams={ this.props.editBlockParamsSellChart }
                changeFormState={ this.props.changeFormState }
                form={ this.props.form }
              />
          }
        </svg>
        <div className="relative">
          <div className="topMenu">
            <div>
              <span className="title">
                Choose chart type:
              </span>
              <div className="inline">
                <ChartTypeSelectorInput title="Buy"
                                        value="buy"
                                        checked={ this.props.selectedChart === 'buy' }
                                        onChange={ this.props.changeChartType }
                                        changeFormState={ this.props.changeFormState } />
              </div>
              <div className="inline">
                <ChartTypeSelectorInput title="Sell"
                                        value="sell"
                                        checked={ this.props.selectedChart === 'sell' }
                                        onChange={ this.props.changeChartType }
                                        changeFormState={ this.props.changeFormState } />
              </div>
            </div>
            <div>
              <button type="button"
                      className="btn btn-outline-success"
                      onClick={() => {this.props.getScript({
                        active: true,
                      })}} >
                Get Script
              </button>
            </div>
          </div>
          <div style={ divStyle }>
            { this.props.form.active ? <Form onCancel={ this.props.changeFormState }
                                             formOptions={ this.props.form }
                                             formDropdown={ this.props.formDropdown }
                                             changeDropdownLeftFirstTitle={this.props.changeDropdownLeftFirstTitle}
                                             changeDropdownRightFirstTitle={this.props.changeDropdownRightFirstTitle}
                                             changeDropdownLeftSecondTitle={this.props.changeDropdownLeftSecondTitle}
                                             changeDropdownRightSecondTitle={this.props.changeDropdownRightSecondTitle}
                                             saveParamsToBlock={ this.props.chartType === 'buy' ?
                                             this.props.saveParamsToBuyChartBlock
                                             :
                                             this.props.saveParamsToSellChartBlock }
                                             chartBlockOptions={ this.props.chartType === 'buy' ?
                                             this.props.buyChart.blocks
                                             :
                                             this.props.sellChart.blocks } /> : '' }
          </div>
          { this.props.pre.active? <Pre /> : '' }
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
  sellChart: PropTypes.object,
  form: PropTypes.object,
  formDropdown: PropTypes.object,
  changeChartType: PropTypes.func,
  changeFormState: PropTypes.func,
  recalcSvgParams: PropTypes.func,
  removeBlockFromBuyChart: PropTypes.func,
  editBlockParamsBuyChart: PropTypes.func,
  addBlockToBuyChart: PropTypes.func,
  removeBlockFromSellChart: PropTypes.func,
  editBlockParamsSellChart: PropTypes.func,
  addBlockToSellChart: PropTypes.func,
  changeDropdownLeftSecondTitle: PropTypes.func,
  changeDropdownLeftFirstTitle: PropTypes.func,
  changeDropdownRightSecondTitle: PropTypes.func,
  changeDropdownRightFirstTitle: PropTypes.func,
  saveParamsToBuyChartBlock: PropTypes.func,
  saveParamsToSellChartBlock: PropTypes.func,
  getScript: PropTypes.func,
};

export default connect((state => ({
  selectedChart: state.selectedChart,
  chartType: state.chartType,
  svg: state.svg,
  buyChart: state.buyChart,
  sellChart: state.sellChart,
  form: state.form,
  formDropdown: state.formDropdown,
  pre: state.pre,
})), (dispatch => ({
  changeChartType: bindActionCreators(changeChartType, dispatch),
  recalcSvgParams: bindActionCreators(recalcSvgParams, dispatch),
  changeFormState: bindActionCreators(changeFormState, dispatch),
  removeBlockFromBuyChart: bindActionCreators(removeBlockFromBuyChart, dispatch),
  editBlockParamsBuyChart: bindActionCreators(editBlockParamsBuyChart, dispatch),
  addBlockToBuyChart: bindActionCreators(addBlockToBuyChart, dispatch),
  removeBlockFromSellChart: bindActionCreators(removeBlockFromSellChart, dispatch),
  editBlockParamsSellChart: bindActionCreators(editBlockParamsSellChart, dispatch),
  addBlockToSellChart: bindActionCreators(addBlockToSellChart, dispatch),
  changeDropdownLeftSecondTitle: bindActionCreators(changeDropdownLeftSecondTitle, dispatch),
  changeDropdownRightSecondTitle: bindActionCreators(changeDropdownRightSecondTitle, dispatch),
  changeDropdownLeftFirstTitle: bindActionCreators(changeDropdownLeftFirstTitle, dispatch),
  changeDropdownRightFirstTitle: bindActionCreators(changeDropdownRightFirstTitle, dispatch),
  saveParamsToBuyChartBlock: bindActionCreators(saveParamsToBuyChartBlock, dispatch),
  saveParamsToSellChartBlock: bindActionCreators(saveParamsToSellChartBlock, dispatch),
  getScript: bindActionCreators(getScript, dispatch),
})))(MainComponent);
