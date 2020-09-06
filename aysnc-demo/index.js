console.log('Before');
getUser(1,(user)=>{
    add((sum)=>{
        console.log(sum)
        console.log(user);
    })
});
console.log('After');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('timeout session');
        callback(id);
      },2000)
}

function add(callback){
    var a=5 , b=10;
    var result = a + b;
    callback(result);
}