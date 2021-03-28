// #if process.env.THEME === 'trueEngineering' || !process.env.THEME
import trueEngineering from './TELogo/TELogo';
// #endif
// #if process.env.THEME === 's7' || !process.env.THEME
import s7 from './S7Logo/S7Logo';
// #endif

export default {
  // #if process.env.THEME === 'trueEngineering' || !process.env.THEME
  trueEngineering,
  // #endif
  // #if process.env.THEME === 's7' || !process.env.THEME
  s7,
  // #endif
};
