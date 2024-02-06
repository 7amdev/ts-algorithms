function linear_search(arr: number[], search_value: number): boolean {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === search_value) {
      return true;
    }
  }
  return false;
}

function binary_search(arr: number[], search_value: number) {
  let low_index: number = 0;
  let high_index: number = arr.length;

  do {
    const middle_index = Math.floor(low_index + (high_index - low_index) / 2);
    const middle_value = arr[middle_index];

    if (search_value === middle_value) {
      return middle_index;
    } else if (search_value > middle_value) {
      low_index = middle_index + 1;
    } else {
      high_index = middle_index;
    }
  } while (low_index < high_index);

  return -1;
}

function square_root_search(arr: number[], search_value: number) {
  let jump_amount = Math.floor(Math.sqrt(arr.length));

  let i = 0;
  for (; i < arr.length; i += jump_amount) {
    if (search_value === arr[i]) return i;
    if (search_value > arr[i]) continue;
    if (search_value < arr[i]) break;
  }

  i -= jump_amount;

  for (; i < i + jump_amount && i < arr.length; ++i) {
    if (search_value === arr[i]) return i;
  }

  return -1;
}

// const list_of_number: number[] = [1, 5, 2, 21, 2, 44, 24, 8];
// const is_found = linear_search(list_of_number, 11);

// const list_of_number = [5, 10, 12, 34, 44, 51, 56, 59, 60, 70, 73, 79];
// const is_found = binary_search(list_of_number, 79);

const list_of_number = [5, 10, 12, 34, 44, 51, 56, 59, 60, 70, 73, 79];
const is_found = square_root_search(list_of_number, 5);
console.log(is_found);
