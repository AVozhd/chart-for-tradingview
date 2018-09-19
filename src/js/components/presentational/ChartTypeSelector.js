import React from 'react';
import changeChartType from '../../actions/appActions';

const ChartTypeSelector = (props) => {
  const dispatch = props.dispatch;
  return(
    <div>
      Choose chart type:
      <div className="form-check">
        <input className="form-check-input"
               type="radio"
               name="exampleRadios"
               id="exampleRadios1"
               value="buy"
               onChange={(event) => {
                 dispatch(changeChartType(event.target.value));
               }}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Buy
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input"
               type="radio"
               name="exampleRadios"
               id="exampleRadios2"
               value="sell"
               onChange={(event) => {
                 dispatch(changeChartType(event.target.value));
               }}
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Sell
        </label>
      </div>
    </div>
  )
};

export default ChartTypeSelector;
