function isEnoughCapacity(products, containerSize) {
  let total = 0;

  for (const count of Object.values(products)) {
    total += count;
  }

  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 6));

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
