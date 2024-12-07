console.log("hi")
// 引入 dotenv 套件
require('dotenv').config();

// 使用環境變數
//const port = process.env.PORT;
// const dbHost = process.env.DB_HOST;

// console.log(`App is running on port: ${port}`);
// console.log(`Database host is: ${dbHost}`);
const DEPLOY_KEY=process.env.DEPLOY_KEY
console.log("node 讀取環境變數 DEPLOY_KEY:",DEPLOY_KEY);


console.log("執行app.js結束")

