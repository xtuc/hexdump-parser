const assert = require('assert');
const lib = require("../index.js");

// [ actual, expected ]
const testcases = [
  [
    ``,
    Uint8Array.of()
  ],
  [
    `
      00000000  61 0a                                             |a.|
      00000002
    `,
    Uint8Array.of(0x61, 0x0a)
  ],
  [
    `
      00000000  29 20 7b 0a 20 20 20 20  20 20 63 6f 6e 74 69 6e  |) {.      contin|
    `,
    Uint8Array.of(0x29, 0x20, 0x7b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
                  0x63, 0x6f, 0x6e, 0x74, 0x69, 0x6e)
  ]
];

describe("parse", () => {
  testcases.forEach(test => {
    it("should parse correctly '" + test[1] + "'", () => {
      assert.deepEqual(lib.parse(test[0]), test[1]);
    });
  });
});
