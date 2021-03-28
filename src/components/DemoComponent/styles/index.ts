import { default as common } from './common';

export default {
  common,
  // #if process.env.THEME === 'leroyMerlin' || !process.env.THEME
  leroyMerlin: {
    text: {
      marginLeft: 0,
    },
  },
  // #endif
};
