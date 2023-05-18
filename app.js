const http = require('http')
const host = "localhost"
const port = process.env.PORT || 2012 //muon chay dc tren hosting vd nhu heroku or render thi phai de port nhu the nay
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
   break
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
   break
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
   break
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
   break
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
   break
 }
})

server.listen(port, ()=>{
 console.log("Web server is running at http://" + host + ":" + port)
})