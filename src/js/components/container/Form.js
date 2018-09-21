import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.prepareBlocks = this.prepareBlocks.bind(this);
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
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { formDropdownLeft.first.options.map((option, index) =>
                <span key={index}
                      className="dropdown-item"
                      onClick={() => this.props.changeDropdownLeftFirstTitle(option)}>
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
                    aria-expanded="false">
              { formDropdownLeft.second.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { formDropdownLeft.second.options.map((option, index) =>
                <span key={index}
                      className="dropdown-item"
                      onClick={() => this.props.changeDropdownLeftSecondTitle(option)}>
                  { option }
                </span>
              )}
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
              aria-expanded="false">
              { formDropdownRight.first.title === '' ? currBlock.options.right.title : formDropdownRight.first.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { formDropdownRight.first.options.map((option, index) =>
                  <span key={index}
                        className="dropdown-item"
                        onClick={() => this.props.changeDropdownRightFirstTitle(option)}>
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
                    aria-expanded="false">
              { formDropdownRight.second.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { formDropdownRight.second.options.map((option, index) =>
                  <span key={index}
                        className="dropdown-item"
                        onClick={() => this.props.changeDropdownRightSecondTitle(option)}>
                { option }
              </span>
              )}
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

// onClick={() => this.props.saveParamsToBlock([
//
// ])}
