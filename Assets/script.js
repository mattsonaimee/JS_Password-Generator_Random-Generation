var enter;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;

chars = [
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  ' < ',
  '=',
  ' > ',
  ' ? ',
  '@',
  '[',
  '\\',
  ']',
  ' ^ ',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
space = [];

var prompts;

var toUpper = function (i) {
  return i.toUpperCase();
};

letters2 = letters.map(toUpper);

var generate = document.querySelector('#generate');

generate.addEventListener('click', function () {
  ps = generatePassword();
  document.getElementById('password').placeholder = ps;
});

function generatePassword() {
  enter = parseInt(
    prompt(
      'How many chars would you like your password? Choose between 8 and 128'
    )
  );

  if (!enter) {
    alert('This needs a value');
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt('You must choose between 8 and 128'));
  } else {
    confirmNum = confirm('Will this contain numbers?');
    confirmChar = confirm('Will this contain special chars?');
    confirmUpper = confirm('Will this contain Uppercase letters?');
    confirmLower = confirm('Will this contain Lowercase letters?');
  }

  if (!confirmChar && !confirmNum && !confirmUpper && !confirmLower) {
    prompts = alert('You must choose a criteria!');
  } else if (confirmChar && confirmNum && confirmUpper && confirmLower) {
    prompts = chars.concat(numbers, letters, letters2);
  } else if (confirmChar && confirmNum && confirmUpper) {
    prompts = chars.concat(numbers, letters2);
  } else if (confirmChar && confirmNum && confirmLower) {
    prompts = chars.concat(numbers, letters);
  } else if (confirmChar && confirmLower && confirmUpper) {
    prompts = chars.concat(letters, letters2);
  } else if (confirmNum && confirmLower && confirmUpper) {
    prompts = numbers.concat(letters, letters2);
  } else if (confirmChar && confirmNum) {
    prompts = chars.concat(numbers);
  } else if (confirmChar && confirmLower) {
    prompts = chars.concat(letters);
  } else if (confirmChar && confirmUpper) {
    prompts = chars.concat(letters2);
  } else if (confirmLower && confirmNum) {
    prompts = letters.concat(numbers);
  } else if (confirmLower && confirmUpper) {
    prompts = letters.concat(letters2);
  } else if (confirmNum && confirmUpper) {
    prompts = numbers.concat(letters2);
  } else if (confirmChar) {
    prompts = chars;
  } else if (confirmNum) {
    prompts = numbers;
  } else if (confirmLower) {
    prompts = letters;
  } else if (confirmUpper) {
    prompts = space.concat(letters2);
  }

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = prompts[Math.floor(Math.random() * prompts.length)];
    password.push(pickChoices);
  }

  var ps = password.join('');
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById('password').textContent = ps;
}

var copy = document.querySelector('#copy');
copy.addEventListener('click', function () {
  copyPassword();
});

function copyPassword() {
  document.getElementById('password').select();
  document.execCommand('Copy');
  alert('The password was copied to the clipboard!');
}
