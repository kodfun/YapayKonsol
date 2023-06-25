const pre = document.getElementById('output');

console.log = function(str) {
  if (typeof str === 'object') {
    str = JSON.stringify(str);
  }

  pre.innerHTML += str + '\n';
};