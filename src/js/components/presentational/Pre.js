import React from 'react';

const Pre = ({  }) => {
  return(
    <pre className="result-script">
      <h1>
        Result script title
      </h1>
      study("MACD")
      <br />
      fast = 12, slow = 26
      <br />
      fastMA = ema(close, fast)
      <br />
      slowMA = ema(close, slow)
      <br />
      macd = fastMA - slowMA
      <br />
      signal = sma(macd, 9)
      <br />
      plot(macd, color=blue)
      <br />
      plot(signal, color=orange)
    </pre>
  )
};

export default Pre;
