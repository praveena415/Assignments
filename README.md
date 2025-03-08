//video link

https://drive.google.com/file/d/1s4dwafkE6hRfz_ibQ-rqE3GU4qvPwrxO/view?usp=sharing


//1
let myPromise=new Promise(res, rej)=>{
    let success=true;
    SetTimeout(()=>{
        if(success){
            res("Task fiished)
        }else{
            rej("Task failed)
        }
    },1000);
}

//2
myPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Task completed");
});

//3
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 1000);
}
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});

//replacement from line 44 to 50
step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps completed");
  });





