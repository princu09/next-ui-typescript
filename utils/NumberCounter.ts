const NumberCounter = (number: number) => {
  // check if number is more than 1000 then convert it to 1k
  if (number > 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return number;
};

export default NumberCounter;
