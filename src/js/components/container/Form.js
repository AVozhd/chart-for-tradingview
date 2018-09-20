import React from 'react';

export default class Form extends React.Component {
  render() {
    return(
      <form>
        <div className="dropdown-div">
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              { this.props.formDropdown.first.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { this.props.formDropdown.first.options.map((option, index) =>
                <span key={index}
                      className="dropdown-item"
                      onClick={() => this.props.changeDropdownTitle(option)} >
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
              { this.props.formDropdown.first.title }
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              { this.props.formDropdown.first.options.map((option, index) =>
                <span key={index}
                      className="dropdown-item"
                      onClick={() => this.props.changeDropdownTitle(option)} >
                  { option }
                </span>
              )}
            </div>
        </div>
        
        </div>
        <div className="form-group">
          <label className="form-check-label">
            BB
            <input className="form-control"
                   type="text"
                   placeholder="choose params" />
          </label>
        </div>
        <button type="button" className="btn btn-outline-primary">Save</button>
        <button type="button"
                className="btn btn-outline-danger"
                onClick={() => this.props.onCancel({
                  active: false,
                  top: this.props.formOptions.top,
                })} >
          Cancel
        </button>
      </form>
    )
  }
}

/*
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
*/
