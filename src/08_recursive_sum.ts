function sum_v1(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += i;
  }
  return sum;
}

function sum_v2(n: number): number {
  // Base Case
  if (n === 1) return 1;

  // Recursive
  return n + sum_v2(n - 1);
}

function sum_v3(from: number, to: number, result: number): number {
  if (from > to) return result;

  result += from;
  console.log("I: " + from + ", sum: " + result);

  return sum_v3(from + 1, to, result);
}
