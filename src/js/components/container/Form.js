import React from 'react';
import LeftOptionsList from '../presentational/LeftOptionsList';
import RightOptionsList from '../presentational/RightOptionsList';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.prepareBlocks = this.prepareBlocks.bind(this);
    this.setSecondDefaultValue = this.setSecondDefaultValue.bind(this);
  }
  
  setSecondDefaultValue(option, type) {
    if(type === 'left') {
      let keys = Object.keys(this.props.formDropdown.left.second.options);
      let values = Object.values(this.props.formDropdown.left.second.options);
      this.props.changeDropdownLeftFirstTitle(option);
      this.props.changeDropdownLeftSecondTitle(newOption(option, keys, values));
    } else {
      let keys = Object.keys(this.props.formDropdown.right.second.options);
      let values = Object.values(this.props.formDropdown.right.second.options);
      this.props.changeDropdownRightFirstTitle(option);
      this.props.changeDropdownRightSecondTitle(newOption(option, keys, values));
    }
  }
  
  prepareBlocks() {
    let blockState = this.props.chartBlockOptions;
    let block = blockState.filter(block => block.key === this.props.formOptions.currentBlock)[0];
    block.options = {
      left: {
        title: this.props.formDropdown.left.first.title,
        param1: this.props.formDropdown.left.second.title,
      },
      right: {
        title: this.props.formDropdown.right.first.title,
        param1: this.props.formDropdown.right.second.title,
      },
    };
    blockState.map((elem) => { elem.key === block.key ? block : elem });
    this.props.saveParamsToBlock(blockState);
  }
  
  
  render() {
    const currBlock = this.props.chartBlockOptions.filter(block => block.key === this.props.formOptions.currentBlock)[0];
    const formDropdownLeft = this.props.formDropdown.left;
    const formDropdownRight = this.props.formDropdown.right;
    return (
      <form>
        <div className="dropdown-div">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              { formDropdownLeft.first.title === '' ? currBlock.options.left.title : formDropdownLeft.first.title }
            </button>
            <div className="dropdown-menu"
                 aria-labelledby="dropdownMenuButton" >
              { formDropdownLeft.first.options.map((option, index) =>
                <span key={index}
                      className="dropdown-item"
                      onClick={() => this.setSecondDefaultValue(option, 'left')}>
                  { option }
                </span>
              )}
            </div>
          </div>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    disabled={ formDropdownLeft.first.title === '' || formDropdownLeft.first.title === 'none' ? "disabled" : false } >
              { formDropdownLeft.second.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <LeftOptionsList />
            </div>
          </div>
        </div>
        
        
        <div className="dropdown-div">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false" >
              { formDropdownRight.first.title === '' ? currBlock.options.right.title : formDropdownRight.first.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { formDropdownRight.first.options.map((option, index) =>
                  <span key={index}
                        className="dropdown-item"
                        onClick={() => this.setSecondDefaultValue(option, 'right')}>
                { option }
              </span>
              )}
            </div>
          </div>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    disabled={ formDropdownRight.first.title === '' || formDropdownRight.first.title === 'none' ? "disabled" : false }>
              { formDropdownRight.second.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <RightOptionsList />
            </div>
          </div>
        </div>
        
        
        <button type="button"
                className="btn btn-outline-primary"
                onClick={() => this.prepareBlocks()} >
          Save
        </button>
        <button type="button"
                className="btn btn-outline-danger"
                onClick={() => this.props.onCancel({
                  active: false,
                  top: this.props.formOptions.top,
                })}>
          Cancel
        </button>
      </form>
    )
  }
}

function newOption(option, keys, values) {
  let index = keys.indexOf(keys.filter(key => key === option)[0]);
  return values[index][0];
}
