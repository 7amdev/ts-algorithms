function binary_search(input: number[], value: number):number {
  let lo: number = 0;
  let hi: number = input.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const middle_value = input[m];
    
    if (middle_value === value) {
      return m;
    } else if (value > middle_value) {
      lo = m + 1;
    } else {
      hi = m;
    }

  } while (lo < hi);

  return -1;
}

// Sorted data
const data = [10, 11, 12, 16, 18, 22, 33, 34, 36];

const found_index = binary_search(data, 22);
console.log('Found: ', found_index);
