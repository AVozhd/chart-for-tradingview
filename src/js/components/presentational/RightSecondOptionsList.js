import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDropdownRightThirdTitle } from '../../store/actions';
import PropTypes from 'prop-types';

class RightSecondOptionsList extends React.Component {
  render() {
    switch(this.props.type) {
      case 'rsi':
        return(
          this.props.rsiOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightThirdTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ma':
        return(
          this.props.maOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightThirdTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ema':
        return(
          this.props.emaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightThirdTitle(option)}>
              { option }
            </span>
          )
        );
      case 'sma':
        return(
          this.props.smaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightThirdTitle(option)}>
              { option }
            </span>
          )
        );
    }
    return this.props.noOptions;
  }
}

RightSecondOptionsList.propTypes = {
  changeDropdownRightThirdTitle: PropTypes.func,
  type: PropTypes.string,
  rsiOptions: PropTypes.array,
  maOptions: PropTypes.array,
  emaOptions: PropTypes.array,
  smaOptions: PropTypes.array,
  noOptions: PropTypes.string,
};

export default connect((state => ({
  type: state.formDropdown.right.first.title,
  rsiOptions: state.formDropdown.right.third.options.rsi,
  maOptions: state.formDropdown.right.third.options.ma,
  emaOptions: state.formDropdown.right.third.options.ema,
  smaOptions: state.formDropdown.right.third.options.sma,
  noOptions: state.formDropdown.right.third.options.none,
})), (dispatch => ({
  changeDropdownRightThirdTitle: bindActionCreators(changeDropdownRightThirdTitle, dispatch),
})))(RightSecondOptionsList);
