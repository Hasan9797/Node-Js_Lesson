const os = require('os');

// Platform
console.log(os.platform());

// Arch
console.log(os.arch());

// CPUS
console.log(os.cpus());

// Qancha bo'sj hotira qolganini ko'rsatuvchi method
console.log(os.freemem());

// umumiy hotira
console.log(os.totalmem());

// computer name
console.log(os.hostname());

// home directory
console.log(os.homedir());

// Time to on kampyuter
console.log(os.uptime());