export const getProperty = (object, ...args) => {
  if (typeof object !== 'object') return null;

  return args.reduce((acc, prop) => {
    if (acc !== undefined) {
      acc = acc[prop]; // eslint-disable-line no-param-reassign
    }
    return acc;
  }, object);
};

export const camelize = str => str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
