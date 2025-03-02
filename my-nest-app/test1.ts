// import axios from "axios";
// 


// Ваш API-ключ DeepAI
// const API_KEY = "ecd6294a-65a0-40a4-8079-3e9f8084f0ad";




// Example posting file picker input text (Browser only):
// document.getElementById('yourFileInputId').addEventListener('change', async function() {
//      const formData = new FormData();
//      formData.append('text', this.files[0]);

//      const resp = await fetch('https://api.deepai.org/api/text2img', {
//          method: 'POST',
//          headers: {
//              'api-key': 'ecd6294a-65a0-40a4-8079-3e9f8084f0ad'
//          },
//          body: formData
//      });

//      const data = await resp.json();
//      console.log(data);
// });

// Example posting a local text file (Node.js only):
// const fs = require('fs');
// (async function() {
//      const formData = new FormData();
//      const txtFileStream = fs.createReadStream("/path/to/your/file.txt"),
//      formData.append('text', txtFileStream);

//      const resp = await fetch('https://api.deepai.org/api/text2img', {
//          method: 'POST',
//          headers: {
//              'api-key': 'ecd6294a-65a0-40a4-8079-3e9f8084f0ad'
//          },
//          body: formData
//      });

//      const data = await resp.json();
//      console.log(data);
// });

// Example directly sending a text string:
// (async function() {
//   const resp = await fetch('https://api.deepai.org/api/text2img', {
//       метод: 'POST', 
//       заголовки: {
//           'Content-Type': 'application/json', 
//           'api-ключ': 'ecd6294a-65a0-40a4-8079-3e9f8084f0ad'
//       }, 
//       тело: JSON.stringify({
//           текст: "YOUR_TEXT_HERE",
//       })
//   });
  
//   const data = await resp.json();
//   console.log(data);
// })()