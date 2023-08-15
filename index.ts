const bubbleSort = (numbers: number[]): number[] => {
  const swapped = [...numbers]

  for (let i = 0; i < (numbers.length - 1); i++) {
    const current = swapped[i]
    const next = swapped[i + 1]

    const swap = current < next

    swapped[i] = swap ? next : current
    swapped[i + 1] = swap ? current : next
  }

  if (swapped.length == 2) {
    return swapped
  }

  const lastNumber = swapped[swapped.length - 1]

  return [...bubbleSort(swapped.slice(0, swapped.length - 1)), lastNumber]
}

const splitSubarrays = (len: number) => (subarrays: number[][], _, index: number, numbers: number[]) => {
  if (index + len > numbers.length) {
    return subarrays
  }

  const subarray = numbers.slice(index, index + len)
  return [...subarrays, subarray]
}

const sum = (numbers: number[]): number => numbers.reduce((total, current) => total + current, 0)

const largest = (numbers: number[]): number => numbers.reduce((largest, current) => current > largest ? current : largest, Number.MIN_VALUE)

const maximumSubarray = (numbers: number[], len: number): number => {
  return largest(numbers.reduce(splitSubarrays(len), []).map(sum))
}

const objectEvenTotal = (obj: object): number => {
  return 0
}

export {
  bubbleSort,
  maximumSubarray,
  objectEvenTotal
}