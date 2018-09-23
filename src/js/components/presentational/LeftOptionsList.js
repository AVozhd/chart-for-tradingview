import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDropdownLeftSecondTitle } from '../../store/actions';
import PropTypes from 'prop-types';

class LeftOptionsList extends React.Component {
  render() {
    switch(this.props.type) {
      case 'rsi':
        return(
          this.props.rsiOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftSecondTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ma':
        return(
          this.props.maOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftSecondTitle(option)}>
              { option }
            </span>
          )
        );
      case 'ema':
        return(
          this.props.emaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftSecondTitle(option)}>
              { option }
            </span>
          )
        );
      case 'sma':
        return(
          this.props.smaOptions.map((option, index) =>
            <span key={index}
                  className="dropdown-item"
                  onClick={() => this.props.changeDropdownLeftSecondTitle(option)}>
              { option }
            </span>
          )
        );
    }
    return this.props.noOptions;
  }
}

LeftOptionsList.propTypes = {
  changeDropdownLeftSecondTitle: PropTypes.func,
  type: PropTypes.string,
  rsiOptions: PropTypes.array,
  maOptions: PropTypes.array,
  emaOptions: PropTypes.array,
  smaOptions: PropTypes.array,
  noOptions: PropTypes.string,
};

export default connect((state => ({
  type: state.formDropdown.left.first.title,
  rsiOptions: state.formDropdown.left.second.options.rsi,
  maOptions: state.formDropdown.left.second.options.ma,
  emaOptions: state.formDropdown.left.second.options.ema,
  smaOptions: state.formDropdown.left.second.options.sma,
  noOptions: state.formDropdown.left.second.options.none,
})), (dispatch => ({
  changeDropdownLeftSecondTitle: bindActionCreators(changeDropdownLeftSecondTitle, dispatch),
})))(LeftOptionsList);
