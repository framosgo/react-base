export const adaptor = translations => translations.reduce((acc, curr) => {
  acc[curr.locale] = {};
  acc[curr.locale][curr.description] = curr.value;
  return acc;
}, {});
