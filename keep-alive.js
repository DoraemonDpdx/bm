const fetch = require("node-fetch")


console.log('Keeping self alive every 5 minutes', 'ping');

setInterval(async() => {
  await fetch(process.env.DASHBOARD_URL);  
  console.log('Kept app alive.');
}, 5 * 60 * 1000)