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

export {
  bubbleSort
}