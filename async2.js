// async2.js

function async1() {
    return new Promise(
        function (resolve, reject) {
            var time = 0;
            setInterval(function(){
              document.getElementById("task1").innerHTML = time;
              time=time+1;
              if(time==6){
                resolve("TAREA 5 seg");
              }
            },1000);
            // reject(false);
        });
}


function async2() {
    return new Promise(
        function (resolve, reject) {
            var time = 0;
            setInterval(function(){
              document.getElementById("task3").innerHTML = time;
              time=time+1;
              if(time==11){
                resolve("TAREA 10 seg");
              }
            },1000);
            // reject(false);
        });
}


Promise.all([
    async1(),
    async2(),
])
.then(([result1, result2]) => {
    document.getElementById("task2").innerHTML = "Tarea2";
    document.getElementById("task4").innerHTML = result1;
    document.getElementById("task5").innerHTML = result2;
})


async1().then(result1=>{
  document.getElementById("task4").innerHTML = result1;
  async2().then(result2=>{
    document.getElementById("task5").innerHTML = result2;
    document.getElementById("task2").innerHTML = "Tareas completadas";
  });

});
