// sync.js
  var time = 0;
  setInterval(function(){
    document.getElementById("task1").innerHTML = time;
    time=time+1;
  },1000);

document.getElementById("task2").innerHTML = "Tarea2";
// setTimeout(function(){
//   document.getElementById("task2").innerHTML = "Tarea2";
// }, 10000);
