import React from 'react';

class Input extends React.Component {
  render() {
    let {type, placeholder, value, disabled} = this.props;
    return(
      <div>
        <input className="block text-center" type={type} placeholder={placeholder} value={value} disabled={disabled} />
      </div>
    )
  }
}

export default Input;
