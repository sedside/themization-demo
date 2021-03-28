export const environments = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
};

export const environmentConfig = {
  URL: {
    [environments.PROD]: '', // to be set
    [environments.DEV]: '',
  },
  PORT: {
    [environments.PROD]: undefined, // to be set
    [environments.DEV]: undefined,
  },
};
