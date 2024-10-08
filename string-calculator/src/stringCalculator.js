function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = ",";
  if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0][2];
      numbers = parts[1];
  }
  const numberArray = numbers.replace(/\n/g, delimiter).split(delimiter);
  const negativeNumbers = [];
  const sum = numberArray.reduce((acc, num) => {
    const parsedNum = parseInt(num);
        if (parsedNum < 0) {
            negativeNumbers.push(parsedNum);
        }
        return acc + parsedNum;
  }, 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
  }
  return sum;
}

module.exports = add;