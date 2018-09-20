import React from 'react';

export default class Form extends React.Component {
  render() {
    return(
      <form>
        <div className="form-group">
          <label className="form-check-label">
            RS1
            <input className="form-control"
                   type="text"
                   placeholder="choose params" />
          </label>
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
