// Utility function to wait for a given number of milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function logTimeWithDelay() {
  const output = document.getElementById('output');
  
  const timeBefore = new Date().toLocaleTimeString();
  output.textContent += `Time before wait: ${timeBefore}\n`;

  await wait(2000);  // wait for 2 seconds

  const timeAfter = new Date().toLocaleTimeString();
  output.textContent += `Time after wait:  ${timeAfter}\n\n`;
}

document.getElementById('startBtn').addEventListener('click', () => {
  logTimeWithDelay();
});
