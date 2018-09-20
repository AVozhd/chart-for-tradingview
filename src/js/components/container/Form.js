import React from 'react';

export default class Form extends React.Component {
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="button" className="btn btn-outline-primary">Save</button>
        <button type="button" className="btn btn-outline-danger">Cancel</button>
      </form>
    )
  }
}
