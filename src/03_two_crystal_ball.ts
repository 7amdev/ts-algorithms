// Given two crystal balls that will break if dropped from high enough
// distance, determine the next spot in which it will break in the
// most optimized way.

function crystal_ball(input: boolean[]) {
  // define the increase amount
  const increase_amount = Math.floor(Math.sqrt(input.length));
  let i = 0;

  // loop by the increase amount until reaching a true value
  for (; i < input.length; i += increase_amount) {
    if (input[i]) {
      break;
    }
  }

  i -= increase_amount;

  for (; i <= i + increase_amount; ++i) {
    if (input[i]) {
      return i;
    }
  }

  return -1;
}

// const d = [false, false, false, false, false, false, false, true];
// const found_idx = crystal_ball(d);
// console.log(found_idx);
