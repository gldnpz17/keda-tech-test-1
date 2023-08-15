import { largest, sum } from "./common"

const splitSubarrays = (len: number) => (subarrays: number[][], _, index: number, numbers: number[]) => {
  if (index + len > numbers.length) {
    return subarrays
  }

  const subarray = numbers.slice(index, index + len)
  return [...subarrays, subarray]
}

const maximumSubarray = (numbers: number[], len: number): number => {
  return largest(numbers.reduce(splitSubarrays(len), []).map(sum))
}

export { maximumSubarray }