import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDropdownLeftThirdTitle } from '../../store/actions';
import PropTypes from 'prop-types';

class LeftSecondOptionsList extends React.Component {
  render() {
    switch(this.props.type) {
      case 'rsi':
        return(
          this.props.rsiOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftThirdTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ma':
        return(
          this.props.maOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftThirdTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ema':
        return(
          this.props.emaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftThirdTitle(option)}>
              { option }
            </span>
          )
        );
      case 'sma':
        return(
          this.props.smaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftThirdTitle(option)}>
              { option }
            </span>
          )
        );
    }
    return this.props.noOptions;
  }
}

LeftSecondOptionsList.propTypes = {
  changeDropdownLeftThirdTitle: PropTypes.func,
  type: PropTypes.string,
  rsiOptions: PropTypes.array,
  maOptions: PropTypes.array,
  emaOptions: PropTypes.array,
  smaOptions: PropTypes.array,
  noOptions: PropTypes.string,
};

export default connect((state => ({
  type: state.formDropdown.left.first.title,
  rsiOptions: state.formDropdown.left.third.options.rsi,
  maOptions: state.formDropdown.left.third.options.ma,
  emaOptions: state.formDropdown.left.third.options.ema,
  smaOptions: state.formDropdown.left.third.options.sma,
  noOptions: state.formDropdown.left.third.options.none,
})), (dispatch => ({
  changeDropdownLeftThirdTitle: bindActionCreators(changeDropdownLeftThirdTitle, dispatch),
})))(LeftSecondOptionsList);
