setTimeout(() => {
  process.stdout.write('\r|   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1100);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 1400)
setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1700)
setTimeout(() => {
 
  process.stdout.write('\r-   '); 
}, 2000)
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2300)
setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 2600)