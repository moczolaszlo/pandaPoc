export const rem = (input: number | string): number | string => {
  const value = typeof input === 'string' ? parseInt(input, 10) : input;
  if (Number.isNaN(value)) {
    return input;
  }
  return `${value / 16}rem`;
};
