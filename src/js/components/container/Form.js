import React from 'react';
import LeftOptionsList from '../presentational/LeftOptionsList';
import LeftSecondOptionsList from '../presentational/LeftSecondOptionsList';
import RightOptionsList from '../presentational/RightOptionsList';
import RightSecondOptionsList from '../presentational/RightSecondOptionsList';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.prepareBlocks = this.prepareBlocks.bind(this);
    this.setSecondDefaultValue = this.setSecondDefaultValue.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  closeForm() {
    this.props.onCancel({
                  active: false,
                  top: this.props.formOptions.top,
                });
    this.props.changeAddsState(false);
  }

  setSecondDefaultValue(option, type) {
    if(option.search(/[.*ma]/i) !== -1) {
      this.props.changeAddsState(true);
    } else {
      this.props.changeAddsState(false);
    }
    if(type === 'left') {
      let keys = Object.keys(this.props.formDropdown.left.second.options);
      let values = Object.values(this.props.formDropdown.left.second.options);
      let keys2 = Object.keys(this.props.formDropdown.left.third.options);
      let values2 = Object.values(this.props.formDropdown.left.third.options);
      this.props.changeDropdownLeftFirstTitle(option);
      this.props.changeDropdownLeftSecondTitle(newOption(option, keys, values));
      this.props.changeDropdownLeftThirdTitle(newOption(option, keys2, values2));
    } else {
      let keys = Object.keys(this.props.formDropdown.right.second.options);
      let values = Object.values(this.props.formDropdown.right.second.options);
      let keys2 = Object.keys(this.props.formDropdown.right.third.options);
      let values2 = Object.values(this.props.formDropdown.right.third.options);
      this.props.changeDropdownRightFirstTitle(option);
      this.props.changeDropdownRightSecondTitle(newOption(option, keys, values));
      this.props.changeDropdownRightThirdTitle(newOption(option, keys2, values2));
    }
  }

  prepareBlocks() {
    let blockState = this.props.chartBlockOptions;
    let block = blockState.filter(block => block.key === this.props.formOptions.currentBlock)[0];
    block.options = {
      left: {
        title: this.props.formDropdown.left.first.title,
        param1: clearOutput(this.props.formDropdown.left.second.title, this.props.formDropdown.left.third.title),
      },
      right: {
        title: this.props.formDropdown.right.first.title,
        param1: clearOutput(this.props.formDropdown.right.second.title, this.props.formDropdown.right.third.title),
      },
    };
    blockState.map((elem) => { elem.key === block.key ? block : elem });
    this.props.saveParamsToBlock(blockState);
    this.props.changeAddsState(false);
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
          <div {...(this.props.adds.active ? {className: 'group-form-param'} : {})}>
            { this.props.adds.active ?
              <div className="form-param">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                  </div>
                  <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                </div>
              </div>
              : ''}
            <div className="dropdown-div">
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
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        disabled={ formDropdownLeft.first.title === '' || formDropdownLeft.first.title === 'none' ? "disabled" : false } >
                  { formDropdownLeft.third.title }
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <LeftSecondOptionsList />
                </div>
              </div>
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
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    disabled={ formDropdownRight.first.title === '' || formDropdownRight.first.title === 'none' ? "disabled" : false }>
              { formDropdownRight.third.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <RightSecondOptionsList />
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
                onClick={() => this.closeForm()}>
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

function clearOutput(condition, param) {
  return condition === undefined || param === undefined ? '' : `${condition} ${param}`;
}
