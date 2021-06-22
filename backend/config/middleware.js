/**
 * Middleware Configuration File
 */

 module.exports = {
     settings: {
          cors: {
               enabled: true,
               origin: ["http://localhost:3003", "http://localhost:3002", "http://0.0.0.0:3003", "http://0.0.0.0:3002", "https://pawncore.syzcosoftware.com", "https://pawncoreapi.syzcosoftware.me", "http://192.168.1.240:3002", "http://192.168.1.240:3003"]
          }
     }
}