const years = [2000, 2004, 2016, 1998, 2002, 1900, 2100];
years.forEach((el) => {
  if (el % 4 === 0) {
    console.log(`YES, ${el} leap year`);
  }
  console.log(`NO, ${el} not a leap year`);
});
