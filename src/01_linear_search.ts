function linear_search(input: number[], value: number): number {
  for (let i = 0; i < input.length; ++i) {
    if (input[i] === value)
      return i;
  }

  return -1;
}

const input_data = [1, 4, 6, 6, 10, 7, 3, 3, 8, 1];
const search_value = 3;
const found = linear_search(input_data, search_value);

if (found > -1 ) console.log(`Found Number ${search_value} at index ${found}`);
else console.log(`Number ${search_value} not found`);

