import React from 'react';
// import ShadowDOM from 'react-shadow';

export default class SvgInstanceExample extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   // this.attachShadow({ mode: "open" });
  // }
  
  // componenDidMount() {
  //   let element = document.getElementsByTagName('use');
  //   element.attachShadow({ mode: "open" });
  // }
  
  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg"
             className="defined-icon">
          <symbol id="phone">
            <rect x="5" y="5" width="70" height="100" rx="5"/>
            <circle r="3" cy="105" cx="40"/>
          </symbol>
        </svg>
        <h1>Separator</h1>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 80 110"
               className="displayed-icon"
               version="1.1"
               xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Title for SVG elem</title>
            <desc>
              Some description for SVG elem
            </desc>
            <use xlinkHref="#phone" />
          </svg>
        </div>
      </div>
    )
  }
}
