const assert = require('assert');

// declaração da função division, definida anteriormente...

function division(x, y) {
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣