console.log('ts_satisfies.ts');
var first = {
    red: 'yes',
    green: false,
    blue: 'kinda',
    platypus: false
};
var second = {
    red: 'yes',
    green: false,
    blue: 'kinda',
    platypus: false
}, satisfies, Record;
, unknown > ;
var third = {
    red: 'yes',
    green: false,
    blue: 'kinda',
    platypus: false
}, satisfies, Record;
, string > ;
var fourth = {
    red: 'yes',
    green: false,
    blue: 'kinda',
    platypus: false
};
var fifth = {
    red: 'yes',
    green: false,
    blue: 'kinda',
    platypus: false
};
first.blue.toUpperCase(); // error, secondColors.blue is unknown
first.green.toUpperCase(); // error, secondColors.green is unknown
first.platypus.toUpperCase();
second.blue.toUpperCase(); // ok it's a string
second.green.toUpperCase(); // error, it's a boolean
second.platypus.toUpperCase();
third.blue.toUpperCase();
third.green.toUpperCase();
third.platypus.toUpperCase();
fourth.blue.toUpperCase();
fourth.green.toUpperCase();
fourth.platypus.toUpperCase();
fifth.blue.toUpperCase();
fifth.green.toUpperCase();
fifth.platypus.toUpperCase();
