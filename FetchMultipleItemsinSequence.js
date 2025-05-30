function fetchItem(itemName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched: ${itemName}`);
    }, delay);
  });
}

// Fetch items sequentially
fetchItem("User", 1000)
  .then((result) => {
    console.log(result);
    return fetchItem("Posts", 2000);
  })
  .then((result) => {
    console.log(result);
    return fetchItem("Comments", 1500);
  })
  .then((result) => {
    console.log(result);
  });
