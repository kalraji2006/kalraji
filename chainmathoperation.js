// Start a promise that resolves with 10
Promise.resolve(10)
  .then((num) => {
    return num * 3;  // multiply by 3
  })
  .then((num) => {
    return num + 4;  // add 4
  })
  .then((num) => {
    return num / 2;  // divide by 2
  })
  .then((result) => {
    console.log("Final result:", result);
  });
