var syncAdd =(a , b) =>{

  return new Promise((resolve , reject) => {

    setTimeout(() =>{
      if(typeof a === 'number' && typeof b ==='number')
        resolve(a+b);
      else {
        reject('Same type of parameters required');
      }
    } , 2000)


  });

};

syncAdd(5 , '5').then((suc)=>{
  console.log('Success : ' , suc);
  return syncAdd(suc , 88);
}).then((suc)=>{
  console.log('Success : ' , suc);
}).catch((e)=> {

  console.log(e);
});
