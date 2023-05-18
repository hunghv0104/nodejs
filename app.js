const http = require('http')
const host = "localhost"
const port = process.env.PORT || 2012
const fs = require('fs') //file system dung de doc file
const server = http.createServer((req, res)=>{
 switch(req.url){
  case '/':
   fs.readFile("index.html", (err, data) => {
    if (err){
     console.log(err)
    }
    else{
     res.write(data)
     res.end()
    }
   })
  case '/hanoi':
   fs.readFile("hanoi.html", (err, data) => {
    if (err){
     console.log(err)
    }
    else{
     res.write(data)
     res.end()
    }
   })
  case '/hcm':
   fs.readFile("hcm.html", (err, data) => {
    if (err){
     console.log(err)
    }
    else{
     res.write(data)
     res.end()
    }
   })
  case '/danang':
   fs.readFile("danang.html", (err, data) => {
    if (err){
     console.log(err)
    }
    else{
     res.write(data)
     res.end()
    }
   })
  default:
   fs.readFile("error.html", (err, data) => {
    if (err){
     console.log(err)
    }
    else{
     res.write(data)
     res.end()
    }
   })
 }
})

server.listen(port, ()=>{
 console.log("Web server is running at http://" + host + ":" + port)
})