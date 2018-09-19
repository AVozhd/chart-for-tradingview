import React from 'react';

const ChartTypeSelectorInput = (props) => {
  const { value, id, title, checked } = props;
  return(
    <div className="form-check">
      <input className="form-check-input"
             type="radio"
             name="exampleRadios"
             id={id}
             value={value} checked={checked === value} />
      <label className="form-check-label" htmlFor={id}>
        {title}
      </label>
    </div>
  )
};

export default ChartTypeSelectorInput;
