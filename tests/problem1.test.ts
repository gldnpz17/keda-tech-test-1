import { describe, expect, test } from '@jest/globals'
import { bubbleSort } from '..'

describe('Problem 1', () => {
  test('Test Case 1', () => {
    const numbers = [1, 2, 4, 3, 5, 3, 2, 1]
    const expected = [5, 4, 3, 3, 2, 2, 1, 1]

    const result = bubbleSort(numbers)

    expect(result).toEqual(expected)
  })
})