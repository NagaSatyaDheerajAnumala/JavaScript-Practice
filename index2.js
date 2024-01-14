const response  = require("express");
const zod = require("zod");

function validateCredentials(obj){
  const schema = zod.object({
    username:zod.string(),
    password:zod.string().min(8)
  });

  console.log(schema.safeParse(obj));
}

validateCredentials({
  username: "Dheerajanumala",
  password: "123123123"
})


application.post("/login", function(req,res){
  const input = req.body;
  const reponse = validateCredentials(req.body);
  if(!response.success){
    res.json({
      msg:"Your inputs are invalid"
    })
    return;
  }
})

app.use(function(err,res,next){
  res.status(500).json({msg: " Error found"});
})
