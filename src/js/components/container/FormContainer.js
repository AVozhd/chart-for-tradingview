import React from 'react';
import Input from '../presentational/Input';

class FormContainer extends React.Component {
  render() {
    return (
      <form className="grid-container">
        <Input type="text" value="Buy" disabled="disabled" />
        <Input type="text" value="RS1" />
        <Input type="text" value="BB1" />
      </form>
    )
  }
}

export default FormContainer;
