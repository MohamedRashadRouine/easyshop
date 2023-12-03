// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/send-email', (req, res) => {
  const { userEmail } = req.body;

  // Simulate sending an email to the user
  console.log(`Email sent to ${userEmail}`);

  res.json({ message: 'Email sent successfully' });
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
