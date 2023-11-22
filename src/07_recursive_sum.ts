function sum (n: number): number {
  // Base Case
  if (n === 1) return 1;
  
  // Recursive
  return n + sum(n - 1);
}

function sum_v2(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += i
  }
  return sum;
}
