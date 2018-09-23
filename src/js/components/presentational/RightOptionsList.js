import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDropdownRightSecondTitle } from '../../store/actions';
import PropTypes from 'prop-types';

class RightOptionsList extends React.Component {
  render() {
    switch(this.props.type) {
      case 'rsi':
        return(
          this.props.rsiOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightSecondTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ma':
        return(
          this.props.maOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightSecondTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ema':
        return(
          this.props.emaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightSecondTitle(option)}>
              { option }
            </span>
          )
        );
      case 'sma':
        return(
          this.props.smaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownRightSecondTitle(option)}>
              { option }
            </span>
          )
        );
    }
    return this.props.noOptions;
  }
}

RightOptionsList.propTypes = {
  changeDropdownRightSecondTitle: PropTypes.func,
  type: PropTypes.string,
  rsiOptions: PropTypes.array,
  maOptions: PropTypes.array,
  emaOptions: PropTypes.array,
  smaOptions: PropTypes.array,
  noOptions: PropTypes.string,
};

export default connect((state => ({
  type: state.formDropdown.right.first.title,
  rsiOptions: state.formDropdown.right.second.options.rsi,
  maOptions: state.formDropdown.right.second.options.ma,
  emaOptions: state.formDropdown.right.second.options.ema,
  smaOptions: state.formDropdown.right.second.options.sma,
  noOptions: state.formDropdown.right.second.options.none,
})), (dispatch => ({
  changeDropdownRightSecondTitle: bindActionCreators(changeDropdownRightSecondTitle, dispatch),
})))(RightOptionsList);
