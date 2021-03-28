import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Input,
  Select,
  Switch,
  Checkbox,
  CssBaseline,
  AddButton,
  useTheme,
} from '@eastbanctechru/true-react-ui-kit';
import { Logo } from '../Logo';
import { ThemedComponent } from '../ThemedComponent';

import styles from './styles';

const OPTIONS = ['foo', 'bar', 'baz'];

const DemoComponent: FC = () => {
  const { t } = useTranslation('common');
  const classes = useTheme(styles);
  const [isOn, setIsOn] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.header}>
        <Logo />
        <div className={classes.text}>
          <ThemedComponent />
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.add}>
          <AddButton text={t('addButton')} />
        </div>
        <div className={classes.select}>
          <Select
            placeholder={t('select')}
            options={OPTIONS}
            onSelect={() => console.log()}
          />
        </div>
      </div>
      <div className={classes.section}>
        <Input label={t('placeholder')} onChange={() => console.log()} />
      </div>
      <div className={classes.sectionTwo}>
        <div className={classes.switch}>
          <Switch
            value="switch"
            isChecked={isOn}
            onChange={() => setIsOn(!isOn)}
          />
          <div className={classes.label}>Свич</div>
        </div>
        <Checkbox
          value="check"
          isChecked={isChecked}
          onSelect={() => setIsChecked(!isChecked)}
        >
          {t('checkbox')}
        </Checkbox>
        <Button>{t('button')}</Button>
      </div>
    </div>
  );
};

export default DemoComponent;
