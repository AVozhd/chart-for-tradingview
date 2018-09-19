import React from 'react';

const ChartTypeSelectorInput = ({ value, title, checked, onChange }) => {
  return(
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
               type="radio"
               checked={checked}
               onChange={() => onChange(value) }
        />
          {title}
      </label>
    </div>
  )
};

export default ChartTypeSelectorInput;
