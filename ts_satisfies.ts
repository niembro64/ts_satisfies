console.log('ts_satisfies.ts');

type Colors = 'red' | 'green' | 'blue';

// Ensure that we have exactly the keys from 'Colors'.
const firstColors = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
  //  ~~~~~~~~~~ error - "platypus" was never listed in 'Colors'.
} satisfies Record<Colors, unknown>;

// Ensure that we have exactly the keys from 'Colors'.
const secondColors: Record<Colors, unknown> = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
  //  ~~~~~~~~~~ error - "platypus" was never listed in 'Colors'.
};
