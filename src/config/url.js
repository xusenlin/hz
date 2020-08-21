const nodeEnv = process.env.NODE_ENV;


let ApiUrl = "http://localhost:8088";

if ("production" === nodeEnv) {
  ApiUrl =  "http://localhost:8088";
}

export { ApiUrl };
