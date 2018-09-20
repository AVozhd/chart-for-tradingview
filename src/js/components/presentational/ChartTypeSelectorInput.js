import React from 'react';

const ChartTypeSelectorInput = ({ value, title, checked, onChange, changeFormState }) => {
  return(
    <div className="form-check">
      <label className="form-check-label"
             onClick={ () => changeFormState({
               active: false,
               top: 0,
             }) } >
        <input className="form-check-input"
               type="radio"
               checked={ checked }
               onChange={ () => onChange(value) }
        />
          {title}
      </label>
    </div>
  )
};

export default ChartTypeSelectorInput;
