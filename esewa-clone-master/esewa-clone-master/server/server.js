import http from "http";
import main from "./seedScript.js";
const host = "localhost";
const port = 8000;
//create a server object:

http
  .createServer(function (req, res) {
    let result = main();
    console.log("reuslt", result);
    res.write(); //write a response to the client
    res.end(); //end the response
  })
  .listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  }); //the server object listens on port 8080
