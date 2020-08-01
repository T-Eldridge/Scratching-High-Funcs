// .map() function that takes an array of items and a function that
// returns an array with each item manipulated by that function.

const nums = [1, 8, 25, 34, 685, 42]

const scratchMap = (func, arr) => {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]))
  }
  return newArray
}

const addTheThings = (num) => {
  return num * num
}

scratchMap(addTheThings, nums)

// .reduce() function that takes an array of food orders with their amounts and
// returns the total amount of all the food orders.

const scratchReduce = (func, arr, currentValue) => {
  let total = currentValue
  for (let i = 0; i < arr.length; i++) {
    total = func(total, arr[i])
  }
  return total
}

const reduceTheThings = (acc, cur) => {
  return acc + cur
}

scratchReduce(reduceTheThings, nums, 0)
// .filter() function that takes an array of items and a function that
// returns an array with only the items that return true in the function.

scratchFilter = (func, arr) => {
  const filterArray = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filterArray.push(arr[i])
    }
  }
  return filterArray
}

const filterTheThings = (num) => {
  if (num % 3 === 0) {
    return true
  }
  return false
}

scratchFilter(filterTheThings, nums)
