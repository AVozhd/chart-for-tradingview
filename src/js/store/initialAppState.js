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
  },
  formDropdown: {
    first: {
      title: 'Choose option',
      options: [
        'Param 1',
        'Param 2',
        'Param 3',
      ],
    }
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
            title: 'RS1',
            param1: 'left params',
          },
          right: {
            title: 'BB',
            param1: 'right params',
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
            title: 'RS1',
            param1: 'left params',
          },
          right: {
            title: 'BB',
            param1: 'right params',
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
