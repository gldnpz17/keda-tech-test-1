const sum = (numbers: number[]): number => numbers.reduce((total, current) => total + current, 0)

const largest = (numbers: number[]): number => numbers.reduce((largest, current) => current > largest ? current : largest, Number.MIN_VALUE)

const isEven = (number: number): boolean => number % 2 == 0

export {
  sum,
  largest,
  isEven
}