function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = ",";
  if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0][2];
      numbers = parts[1];
  }
  const numberArray = numbers.replace(/\n/g, delimiter).split(delimiter);
  const sum = numberArray.reduce((acc, num) => acc + parseInt(num), 0);
  return sum;
}

module.exports = add;