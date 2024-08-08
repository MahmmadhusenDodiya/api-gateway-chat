import express from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const app = express()
const routes = {
   	"/api/auth": "http://localhost:8081/auth",
   	"/api/users": "http://localhost:8081/users",
   	"/api/msgs": "http://localhost:8080/msgs"
}
console.log("Request is there");

for(const route in routes) {
    console.log("inside things --------");
   const target = routes[route];
   app.use(route, createProxyMiddleware({target, changeOrigin: true}));
}

const PORT = 6000;

app.listen(PORT, () => {
   console.log(`api gateway started listening on port : ${PORT}`)
})