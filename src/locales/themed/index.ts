import commonRu from './common-ru-RU';
import commonEn from './common-en-EN';
// #if process.env.THEME === 's7' || !process.env.THEME
import s7Ru from './s7-ru-RU';
import s7En from './s7-en-EN';
// #endif
// #if process.env.THEME === 'leroyMerlin' || !process.env.THEME
import leroyMerlinRu from './leroy-merlin-ru-RU';
import leroyMerlinEn from './leroy-merlin-en-EN';
// #endif
// #if process.env.THEME === 'trueEngineering' || !process.env.THEME
import trueEngineeringRu from './true-engineering-ru-RU';
import trueEngineeringEn from './true-engineering-en-EN';
// #endif

export const themedRu = {
  common: commonRu,
  // #if process.env.THEME === 's7' || !process.env.THEME
  s7: s7Ru,
  // #endif
  // #if process.env.THEME === 'leroyMerlin' || !process.env.THEME
  leroyMerlin: leroyMerlinRu,
  // #endif
  // #if process.env.THEME === 'trueEngineering' || !process.env.THEME
  trueEngineering: trueEngineeringRu,
  // #endif
};

export const themedEn = {
  common: commonEn,
  // #if process.env.THEME === 's7' || !process.env.THEME
  s7: s7En,
  // #endif
  // #if process.env.THEME === 'leroyMerlin' || !process.env.THEME
  leroyMerlin: leroyMerlinEn,
  // #endif
  // #if process.env.THEME === 'trueEngineering' || !process.env.THEME
  trueEngineering: trueEngineeringEn,
  // #endif
};
