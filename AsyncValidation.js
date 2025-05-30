function isUsernameAvailable(name) {
  return new Promise((resolve, reject) => {
    // Simulate async check with timeout
    setTimeout(() => {
      if (name.toLowerCase() === "admin") {
        reject("Name taken");
      } else {
        resolve(true);
      }
    }, 1000);
  });
}

async function checkAvailability(name) {
  try {
    await isUsernameAvailable(name);
    console.log("Available");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Test cases
checkAvailability("user123");  // Should log: Available
checkAvailability("admin");    // Should log: Error: Name taken
