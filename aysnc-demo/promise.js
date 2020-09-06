const prm = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        resolve(1);
        reject(new Error('message'));
    })
  
})

prm.then(result => console.log(result));
prm.catch(err => console.log(err.message));