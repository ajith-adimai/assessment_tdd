function add(numbers) {
  if (numbers === "") return 0;
  const numberArray = numbers.replace(/\n/g, ",").split(",");
  const sum = numberArray.reduce((acc, num) => acc + parseInt(num), 0);
  return sum;
}

module.exports = add;