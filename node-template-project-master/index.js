setImmediate(() => {
  console.log('4 setimmediate Был диван,');
});

setTimeout(() => {
  console.log('8 settimeout 10 Выйди вон!');
}, 10);

setImmediate(() => {
  console.log('5 setimmediate На диване');
});

process.nextTick(() => {
  console.log('2 nexttick Чемодан,');
});

setTimeout(() => {
  console.log('7 settimeout 0 Кто не верит –');
}, 0);

setImmediate(() => {
  console.log('6 setimmediate Ехал слон.');
});

process.nextTick(() => {
  console.log('3 nextick В чемодане');
});

console.log('1 Плыл по морю');
