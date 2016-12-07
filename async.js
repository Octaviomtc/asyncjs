// async.js

function async1() {
    return new Promise(
        function (resolve, reject) {
            var time = 0;
            setInterval(function(){
              document.getElementById("task1").innerHTML = time;
              time=time+1;
              if(time==11){
                resolve(true);
              }
            },1000);
            // reject(false);
        });
}


async1().then(result=>{
  document.getElementById("task2").innerHTML = "Tarea2";
});
