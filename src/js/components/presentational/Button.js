import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      active: false
    }
  }
  
  toggleActive() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  
  render() {
    return(
      <button className={this.state.active ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}
              onClick={this.toggleActive} >
        {this.props.title}
      </button>
    )
  }
  
}
