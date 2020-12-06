const dev = process.env.NODE_ENV !== "production";

if (dev == "development") {
  //const server = "http://localhost:8000";
  const server = "https://abubakar-dental-master.herokuapp.com";
  module.exports = server;
} else {
  const server = "https://abubakar-dental-master.herokuapp.com";
  //const server = "http://localhost:8000";
  module.exports = server;
}
