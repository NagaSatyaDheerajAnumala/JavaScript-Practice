const express = require("express");
const jwt = require("jsonwebtoken"); 
const jwtpassword = '123456';
const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username:"dheerajanumala123@gmail.com",
    password:"dheeraj@99",
    name:"Dheeraj Anumala"
  },
  {
    username:"dheerajanumala2688@gmail.com",
    password:"dheeraj99",
    name:"Dheeraj Anumala"
  },
  {
    username:"na945@scarletmail.rutgers.edu",
    password:"Dheeraj@99",
    name:"Naga Satya Dheeraj Anumala"
  }
];

function userExists(username, password){
  let userExists = false;

  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  if(!userExists(username,password)){
    return res.status(403).json({
      msg:"user does not exists in out memory bin"
    });
  }

  var token = jwt.sign({username: username}, jwtpassword);
  return res.json({
    token,
  });
});

app.get("/users", (req,res)=>{
  const token = req.headers.authorization;
  jwt.verify(token, jwtpassword, (err,decoded)=>{
    if(err){
      res.json({
        msg:"Invalid token"
      })
    }
    else{
      res.json({
        users: ALL_USERS
      })
    }
  })
});


app.listen(3000);