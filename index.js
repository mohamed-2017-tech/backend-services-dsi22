const express = require('express');
const app = express();
const port = 4000;  
app.use(express.json());
app.get('/', (req, res) => {
  res.send('<div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">'
    +
    '<h1>Hello, World!</h1>'
    
    +'<p>Welcome to my Express server.</p>'
    +'<p>This is a simple web page served using Express.js.</p>'
    +'</div>');

});

app.post('/student', (req, res) => {
    const studentData = req.body;
    console.log('Received student data:', studentData);


  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



