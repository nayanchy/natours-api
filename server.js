const server = require('./app');

console.log(server.get('env'));
server.listen(8001, () => {
  console.log('listening on http://localhost:8001');
});
