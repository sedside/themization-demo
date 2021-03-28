import common from './common';
// #if process.env.THEME === 's7' || !process.env.THEME
import s7 from './s7';
// #endif
// #if process.env.THEME === 'trueEngineering' || !process.env.THEME
import trueEngineering from './true-engineering';
// #endif
// #if process.env.THEME === 'leroyMerlin' || !process.env.THEME
import leroyMerlin from './leroy-merlin';
// #endif

export default {
  common,
  // #if process.env.THEME === 's7' || !process.env.THEME
  s7,
  // #endif
  // #if process.env.THEME === 'trueEngineering' || !process.env.THEME
  trueEngineering,
  // #endif
  // #if process.env.THEME === 'leroyMerlin' || !process.env.THEME
  leroyMerlin,
  // #endif
};
