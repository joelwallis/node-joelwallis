const assert = require("assert");
const joelwallis = require(".");

assert.equal(
  typeof joelwallis,
  "function",
  "joelwallis must export a function"
);
assert.equal(
  typeof joelwallis(),
  "string",
  "joelwallis() must return a string"
);
