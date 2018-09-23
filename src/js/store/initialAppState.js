const initialAppState = {
  chartType: 'buy',
  selectedChart: 'buy',
  svg: {
    buyChart: {
      width: 300,
      height: 400,
    },
    sellChart: {
      width: 300,
      height: 400,
    },
  },
  form: {
    active: false,
    top: 0,
    currentBlock: null,
  },
  formDropdown: {
    left: {
      first: {
        title: 'rsi',
        options: [
          'rsi',
          'ma',
          'ema',
          'sma',
          'none',
        ],
      },
      second: {
        title: 'rsi param1',
        options: {
          rsi: [
            'rsi param1',
            'rsi param2',
            'rsi param3',
          ],
          ma: [
            'ma param1',
            'ma param2',
            'ma param3',
          ],
          ema: [
            'ema param1',
            'ema param2',
            'ema param3',
          ],
          sma: [
            'sma param1',
            'sma param2',
            'sma param3',
          ],
          none: '',
        },
      },
    },
    right: {
      first: {
        title: 'rsi',
        options: [
          'rsi',
          'ma',
          'ema',
          'sma',
          'none',
        ],
      },
      second: {
        title: 'rsi param1',
        options: {
          rsi: [
            'rsi param1',
            'rsi param2',
            'rsi param3',
          ],
          ma: [
            'ma param1',
            'ma param2',
            'ma param3',
          ],
          ema: [
            'ema param1',
            'ema param2',
            'ema param3',
          ],
          sma: [
            'sma param1',
            'sma param2',
            'sma param3',
          ],
          none: '',
        },
      },
    },
  },
  pre: {
    active: false
  },
  buyChart: {
    arrows: [
      {
        x1: 0,
        y1: 50,
        x2: 0,
        y2: 100,
      },
      {
        x1: 0,
        y1: 200,
        x2: 0,
        y2: 250,
      }
    ],
    blocks: [
      {
        key: 1,
        blockType: 'simple',
        title: 'BUY',
        x: 0,
        y: 0,
        width: 100,
        height: 50,
      },
      {
        key: 2,
        blockType: 'complex',
        x: 0,
        y: 100,
        width: 250,
        height: 100,
        options: {
          left: {
            title: 'condition',
            param1: 'none',
          },
          right: {
            title: 'condition',
            param1: 'none',
          },
        },
      },
      {
        key: 3,
        blockType: 'simple',
        title: 'finish',
        x: 0,
        y: 250,
        width: 100,
        height: 50,
      }
    ],
  },
  sellChart: {
    arrows: [
      {
        x1: 0,
        y1: 50,
        x2: 0,
        y2: 100,
      },
      {
        x1: 0,
        y1: 200,
        x2: 0,
        y2: 250,
      }
    ],
    blocks: [
      {
        key: 1,
        blockType: 'simple',
        title: 'SELL',
        x: 0,
        y: 0,
        width: 100,
        height: 50,
      },
      {
        key: 2,
        blockType: 'complex',
        x: 0,
        y: 100,
        width: 250,
        height: 100,
        options: {
          left: {
            title: 'condition',
            param1: 'none',
          },
          right: {
            title: 'condition',
            param1: 'none',
          },
        },
      },
      {
        key: 3,
        blockType: 'simple',
        title: 'finish',
        x: 0,
        y: 250,
        width: 100,
        height: 50,
      }
    ],
  },
};

export default initialAppState;