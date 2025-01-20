const next = require("next");
const { createServer } = require("http");
const port = process.env.PORT || 3000; // Phusion Passenger uses port 3000
const app = next({ dev: false, dir: "." }); // Ensure it points to your project directory
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
