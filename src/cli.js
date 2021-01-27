import readlineSync from 'readline-sync';

let isModyfied = false;
let name;

export const whatIsUserName = () => {
  if (isModyfied === false) {
    name = readlineSync.question('May I have your name? ');
    isModyfied = true;
  }
  return name;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${whatIsUserName()}!`);
};
