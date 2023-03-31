console.log('ts_satisfies.ts');

type Colors = 'red' | 'green' | 'blue';

const first: Record<Colors, unknown> = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
};

const second = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
} satisfies Record<Colors, unknown>;

const third = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
} satisfies Record<Colors, string>;

const fourth = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
} as Record<Colors, unknown>;

const fifth = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
} as Record<Colors, string>;

first.blue.toUpperCase(); // error, secondColors.blue is unknown
first.green.toUpperCase(); // error, secondColors.green is unknown

second.blue.toUpperCase(); //ok it's a string
second.green.toUpperCase(); // error, it's a boolean

third.blue.toUpperCase();
third.green.toUpperCase();

fourth.blue.toUpperCase();
fourth.green.toUpperCase();

fifth.blue.toUpperCase();
fifth.green.toUpperCase();
