console.log('starting app');

setTimeout(() => {
  console.log('inside setTimeout function');
} , 2000);


setTimeout(() => {
  console.log('inside  0 setTimeout function');
} , 0);

console.log('finishing app');
