function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 done");
    }, 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2 done");
    }, 1000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 3 done");
    }, 1000);
  });
}

async function runSteps() {
  const result1 = await stepOne();
  console.log(result1);

  const result2 = await stepTwo();
  console.log(result2);

  const result3 = await stepThree();
  console.log(result3);
}

// Run the async function
runSteps();
