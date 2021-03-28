import React, { FC } from 'react';
import { useThemedComponent } from '@eastbanctechru/true-react-ui-kit';
import logos from './Logos';

const Logo: FC<{}> = () => {
  const ThemedLogo = useThemedComponent(logos);

  return <ThemedLogo />;
};

export default Logo;
