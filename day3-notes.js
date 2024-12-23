//synchronous Programming
let a = prompt("What is your name?");
let b =  prompt("What is ur age?");
console.log(a + "is" + b + "years old"); {}




//aysnchronous programming
console.log("start");
setTimeout(function(){
console.log("Hey I am good");
}, 3000);
console.log("end");



// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}


function goodmorning(error, src) {

  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo();
    return
  }
  alert('Good morning' + src);
}

loadScript("https://cdn.jsdsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 


// Promise
// fetch google.com ===> alert('')
// fetch data from data api
// fetch pictures from the server
// print downloading
// rest of the script
// so promise is used for parallel execution. 


let promise = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
      alert("I am a promise and I am fulfilled")
      resolve(true)
      }, 5000)
  })
  let promise2 = new Promise(function(resolve, reject){
    console.log("Promise is pending")
    setTimeout(() => {
    alert("I am a promise and I am rejected")
    reject(new Error("I am an error"))
    }, 7000)
  }) 
  
  promise.then((value) => {
    console.log(value)
  })
  
  // promise2.catch((error) => {
  //   console.log("We got some error and I catched it broo!!!")
  // })
  promise2.then((value) => {
    console.log(value)
  }, (error)=> {
    console.log(error)
  })

  