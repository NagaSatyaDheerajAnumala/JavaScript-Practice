
const express = require("express");

const app = express();

var users = [{
  name: "John",
  kidneys: [{
    healthy: false
  },{
    healthy : true
  }]
}]; 

app.get("/", function(req,res){
  const johnKidneys = users[0].kidneys;
  console.log(johnKidneys);
  const numberOfKedneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for(let i=0;i<johnKidneys.length;i++){
    if(johnKidneys[i].healthy){
      numberOfHealthyKidneys= numberOfHealthyKidneys+1;
    }
  }

  res.json({
    johnKidneys, numberOfKedneys, numberOfHealthyKidneys
  })

})

app.use(express.json());

app.post("/", function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  });
  res.json({
    msg: "Done!" 
  })
})


app.put('/', function(req, res){
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

app.delete('/', function(req, res){
  let check = 0;
  let newKidney = [];
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      newKidney.push({
        healthy:true
      })
    }
  }

  if(!check){
    users[0].kidneys = newKidney;
    res.json({msg:"done!"});
  }
  else{
    res.status(411).json({
      msg: "You have no bad kidneys"
    })
  }
})



app.listen(3000);