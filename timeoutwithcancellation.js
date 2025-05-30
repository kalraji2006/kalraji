function delayedMessage(message, ms, shouldCancel) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldCancel) {
        reject("Operation cancelled");
      } else {
        resolve(message);
      }
    }, ms);
  });
}

// Test: Non-cancelled scenario
delayedMessage("This message will show after delay", 2000, false)
  .then((msg) => {
    console.log("Success:", msg);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// Test: Cancelled scenario
delayedMessage("This message will NOT show", 2000, true)
  .then((msg) => {
    console.log("Success:", msg);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
