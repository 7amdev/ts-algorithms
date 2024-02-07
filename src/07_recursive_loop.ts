function loop(input: number[], index: number) {
  if (index >= input.length) return;

  console.log("number[" + index + "]: ", input[index]);

  loop(input, index + 1);
}

const numbers = [2, 4, 9, 10, 21, 22, 34];
loop(numbers, 0);
