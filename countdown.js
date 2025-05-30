function countdown(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(number);
      resolve();
    }, 1000);
  });
}

countdown(3)
  .then(() => countdown(2))
  .then(() => countdown(1))
  .then(() => {
    console.log("Lift off!");
  });
