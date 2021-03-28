import React, { FC } from 'react';
import { ThemeContext } from '@eastbanctechru/true-react-ui-kit';
import { DemoComponent } from './components/DemoComponent';

import './i18nConfig';

const App: FC = () => (
  <ThemeContext.Provider value="trueEngineering">
    <DemoComponent />
  </ThemeContext.Provider>
);

export default App;
