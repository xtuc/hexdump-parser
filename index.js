const SPACE = " ";
const NONE_COL = 0;
const OFFSET_COL = 1;
const HEX_COL = 2;
const TEXT_COL = 3;

function parseLine(line) {
  const arr = [];
  const cols = line.split("");
  let state = NONE_COL;

  for (var i = 0, len = cols.length; i < len; i++) {
    const char = cols[i];

    if (state === NONE_COL && char === SPACE) {
      continue;
    }

    if (state === NONE_COL && char !== SPACE) {
      state = OFFSET_COL;
      continue;
    }

    if (state === OFFSET_COL && char !== SPACE) {
      continue; // ignore offset col
    }

    if (state === OFFSET_COL && char === SPACE) {
      state = HEX_COL;
      i++; // two cols are seperating
      continue;
    }

    if (state === HEX_COL && char !== SPACE && char !== "|") {
      let hex = "";

      while (cols[i] !== SPACE) {
        hex += cols[i];
        i++;
      }

      arr.push(parseInt(hex, 16));
      continue;
    }

    if (state === HEX_COL && char === SPACE) {
      continue;
    }

    if (state === HEX_COL && char === "|") {
      state = TEXT_COL;
      continue;
    }

    if (state === TEXT_COL) {
      continue; // ignore text col
    }

    throw new Error("unexpected char " + JSON.stringify(char)
                    + " in state " + state);
  }

  return arr;
}

function parse(input) {
  const arr = [];
  const lines = input.split("\n");

  if (lines.length > 0) {
    lines.forEach(line => {
      arr.push(...parseLine(line));
    });
  }

  return Uint8Array.from(arr);
}

module.exports = { parse };
