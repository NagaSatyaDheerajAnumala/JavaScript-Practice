function step1(result, error){
  return new Promise((resolve,reject)=>{
    if(!error){
      resolve(result+10);
    }
    else{
      reject("There is something wrong with the data");
    }
  })
}

function step2(result, error){
  return new Promise((resolve, reject)=>{
    if(!error){
      resolve(result+10);
    }
    else{
      reject("There is something wrong with the data");
    }
  })
}

function step3(result, error){
  return new Promise((resolve, reject)=>{
    if(!error){
      resolve(result+10);
    }
    else{
      reject("There is something wrong with the data");
    }
  })
}

step1(10, false).then((result1)=>step2(result1,false)).then((result2)=>step3(result2,false)).then((result3)=>console.log(result3)).catch((error)=>console.log(error));