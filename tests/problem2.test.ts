import { describe, expect, test } from "@jest/globals";
import { maximumSubarray } from "..";

describe('Problem 2', () => {
  test('Test Case 1', () => {
    const numbers = [100, 200, 300, 400]
    const len = 2

    const result = maximumSubarray(numbers, len)

    expect(result).toEqual(700)
  })

  test('Test Case 2', () => {
    const numbers = [1, 4, 2, 10, 23, 3, 1, 0, 20]
    const len = 4

    const result = maximumSubarray(numbers, len)

    expect(result).toEqual(39)
  })

  test('Test Case 3', () => {
    const numbers = [-3, 4, 0, -2, 6, -1]
    const len = 2

    const result = maximumSubarray(numbers, len)

    expect(result).toEqual(5)
  })
})