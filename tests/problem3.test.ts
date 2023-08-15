import { describe, expect, test } from "@jest/globals"
import { Solutions } from ".."

describe('Problem 3', () => {
  test('Test Case 1', () => {
    const obj = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    }

    const result = Solutions.objectEvenTotal(obj)

    expect(result).toEqual(6)
  })

  test('Test Case 2', () => {
    const obj = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 4}, ee: 'car'}
    }

    const result = Solutions.objectEvenTotal(obj)

    expect(result).toEqual(12)
  })
})