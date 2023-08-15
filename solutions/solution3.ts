import { isEven, sum } from "./common"

const getValuer = (obj: object) => (key: string) => {
  const value = obj[key]

  switch(typeof(value)) {
    case "object":
      return objectEvenTotal(value)
    case "number":
      return isEven(value) ? value : 0
    default:
      return 0
  }
}

const objectEvenTotal = (obj: object): number => {
  const getValue = getValuer(obj)

  return sum(Object.keys(obj).map(getValue))
}

export { objectEvenTotal }