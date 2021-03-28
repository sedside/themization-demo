import React, { FC } from 'react';
import { useTheme, useThemedLocale } from '@eastbanctechru/true-react-ui-kit';

import styles from './styles';

const ThemedComponent: FC<{}> = () => {
  const classes = useTheme(styles);
  const t = useThemedLocale();

  return <div className={classes.root}>{t('themableLocalization')}</div>;
};

export default ThemedComponent;
